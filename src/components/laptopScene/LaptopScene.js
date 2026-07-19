import React, { useEffect, useRef, useState } from "react";
import "./LaptopScene.scss";

// Model: MacBook Pro 13" 2020 by timblewee (Sketchfab, CC-BY) — rigged hinge clip.
// Hinge: the clip runs closed(0) -> open(~0.30) -> closed(~0.8+); we scrub [0, LID_OPEN_FRAC].
// Screen: image is mapped onto mesh "Object_7" (material Material.002).
const LID_OPEN_FRAC = 0.3;

export default function LaptopScene({ modelSrc, screenImageSrc, fallbackImageSrc }) {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!window.WebGLRenderingContext) {
      setFailed(true);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let cleanupFns = [];

    (async () => {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 3));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.92;

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      const camera = new THREE.PerspectiveCamera(36, 1, 0.01, 100);

      const key = new THREE.DirectionalLight(0xfff2e6, 1.7);
      key.position.set(0.4, 0.6, 0.5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xbcd4ff, 1.3);
      rim.position.set(-0.5, 0.3, -0.4);
      scene.add(rim);
      scene.add(new THREE.AmbientLight(0xffffff, 0.15));

      const shadowTex = (() => {
        const c = document.createElement("canvas");
        c.width = c.height = 256;
        const x = c.getContext("2d");
        const g = x.createRadialGradient(128, 128, 8, 128, 128, 128);
        g.addColorStop(0, "rgba(0,0,0,.3)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        x.fillStyle = g;
        x.fillRect(0, 0, 256, 256);
        return new THREE.CanvasTexture(c);
      })();

      const rig = new THREE.Group();
      scene.add(rig);

      let mixer = null;
      let clipDur = 1;
      let model = null;

      const draco = new DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
      const loader = new GLTFLoader();
      loader.setDRACOLoader(draco);

      const state = { p: reduce ? 1 : 0 };
      const clamp = (a, b, t) => Math.min(1, Math.max(0, (t - a) / (b - a)));
      const smooth = (t) => t * t * (3 - 2 * t);

      function apply(p) {
        // animation spans the FULL pin range (0 -> 1) so it finishes exactly
        // when the pin releases — no dead scroll where it's pinned but idle
        const enter = smooth(clamp(0.0, 0.08, p));
        const lidP = smooth(clamp(0.08, 0.72, p));
        const turn = smooth(clamp(0.08, 0.85, p));
        const settle = smooth(clamp(0.72, 1.0, p));

        if (mixer) mixer.setTime(lidP * LID_OPEN_FRAC * clipDur);
        rig.rotation.y = THREE.MathUtils.lerp(-0.5, -0.22, turn);
        rig.rotation.x = THREE.MathUtils.lerp(0.12, -0.02, turn);
        // subtle settle only — the laptop stays fully in frame at rest instead
        // of dropping below it, so there's no "cut off, empty" starting pose
        rig.position.y = THREE.MathUtils.lerp(-0.08, 0.05, enter);
        rig.scale.setScalar(THREE.MathUtils.lerp(0.94, 1.0, enter));

        // pulled in closer so the laptop fills the (now smaller) frame instead
        // of floating in empty space; pulls back slightly on settle since the
        // open silhouette is taller than the closed one and needs more headroom
        camera.position.set(0, 0.4, THREE.MathUtils.lerp(2.6, 2.9, settle));
        camera.lookAt(0, 0.22, 0);
      }
      apply(state.p);

      loader.load(
        modelSrc,
        (gltf) => {
          if (disposed) return;
          model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          model.position.sub(center);
          const s = 0.9 / Math.max(size.x, size.z);
          model.scale.setScalar(s);
          rig.add(model);

          const shadow = new THREE.Mesh(
            new THREE.PlaneGeometry(1.4, 1.4),
            new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
          );
          shadow.rotation.x = -Math.PI / 2;
          shadow.position.y = -size.y * s * 0.5 - 0.02;
          rig.add(shadow);

          const screen = model.getObjectByName("Object_7");
          if (screen && screenImageSrc) {
            new THREE.TextureLoader().load(screenImageSrc, (t) => {
              t.colorSpace = THREE.SRGBColorSpace;
              t.flipY = false;
              t.wrapS = t.wrapT = THREE.RepeatWrapping;
              const zoom = 0.85; // crop in slightly for sharper text, anchored to the top
              t.repeat.x = zoom;
              t.offset.x = (1 - zoom) / 2;
              t.repeat.y = -zoom;
              t.offset.y = zoom;
              t.anisotropy = renderer.capabilities.getMaxAnisotropy();
              const m = new THREE.MeshBasicMaterial({ map: t, toneMapped: false });
              m.color = new THREE.Color(0xececec);
              m.polygonOffset = true; // bias in front of the glass cover to kill z-fight flicker
              m.polygonOffsetFactor = -4;
              m.polygonOffsetUnits = -4;
              screen.material = m;
            });
          }

          if (gltf.animations?.[0]) {
            mixer = new THREE.AnimationMixer(model);
            mixer.clipAction(gltf.animations[0]).play();
            clipDur = gltf.animations[0].duration;
          }

          apply(state.p);
        },
        undefined,
        () => { if (!disposed) setFailed(true); }
      );

      let scrollTrigger = null;
      if (!reduce) {
        const tween = gsap.to(state, {
          p: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
          onUpdate: () => apply(state.p),
        });
        scrollTrigger = tween.scrollTrigger;

        // other images on this content-heavy page load after mount and shift
        // document height, which staled the trigger's start/end — refresh once
        // everything has settled.
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        const refreshTimer = setTimeout(refresh, 1500);
        cleanupFns.push(() => {
          window.removeEventListener("load", refresh);
          clearTimeout(refreshTimer);
        });
      }

      let running = true;
      const io = new IntersectionObserver(
        (entries) => { running = entries[0]?.isIntersecting ?? true; },
        { threshold: 0.01 }
      );
      io.observe(trackRef.current);

      function resize() {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      renderer.setAnimationLoop(() => {
        if (running) renderer.render(scene, camera);
      });

      cleanupFns.push(() => {
        renderer.setAnimationLoop(null);
        ro.disconnect();
        io.disconnect();
        if (scrollTrigger) scrollTrigger.kill();
        scene.traverse((o) => {
          if (o.isMesh) {
            o.geometry?.dispose();
            const mats = Array.isArray(o.material) ? o.material : [o.material];
            mats.forEach((m) => { m?.map?.dispose(); m?.dispose(); });
          }
        });
        renderer.dispose();
        draco.dispose();
      });
    })();

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [modelSrc, screenImageSrc]);

  if (failed) {
    return (
      <div className="laptop-scene laptop-scene--fallback">
        <img src={fallbackImageSrc} alt="VioletCraftworks home page" />
      </div>
    );
  }

  return (
    <div className="laptop-scene" ref={trackRef}>
      <div className="laptop-scene__stage">
        <canvas className="laptop-scene__canvas" ref={canvasRef} />
      </div>
    </div>
  );
}
