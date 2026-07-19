import React, { useEffect, useRef, useState } from "react";
import "./PhoneScene.scss";

export default function PhoneScene({ modelSrc, slides, fallbackImageSrc }) {
  const trackRef  = useRef(null);
  const canvasRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!window.WebGLRenderingContext) { setFailed(true); return; }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    const cleanups = [];

    (async () => {
      const THREE               = await import("three");
      const { GLTFLoader }      = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { DRACOLoader }     = await import("three/examples/jsm/loaders/DRACOLoader.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { default: gsap }   = await import("gsap");
      const { ScrollTrigger }   = await import("gsap/ScrollTrigger");
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const canvas   = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
      renderer.toneMapping         = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0;

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();

      const camera = new THREE.PerspectiveCamera(36, 1, 0.01, 100);
      const rig    = new THREE.Group();
      scene.add(rig);

      const key = new THREE.DirectionalLight(0xfff2e6, 2.0);
      key.position.set(0.4, 0.6, 0.5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xbcd4ff, 1.4);
      rim.position.set(-0.5, 0.3, -0.4);
      scene.add(rim);
      const fill = new THREE.DirectionalLight(0xffffff, 0.7);
      fill.position.set(0.1, 0.2, 1.5);
      scene.add(fill);
      scene.add(new THREE.AmbientLight(0xffffff, 0.25));

      // Filmstrip canvas — 3 slides × 480×1040, top-anchored real images
      const SW = 480, SH = 1040;
      const strip = document.createElement("canvas");
      strip.width = SW * 3; strip.height = SH;

      const tex = new THREE.CanvasTexture(strip);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.flipY      = false;
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1 / 3, 1);
      tex.offset.set(0, 0);
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

      if (slides?.length) {
        Promise.all(slides.map(src => new Promise((res, rej) => {
          const img = new Image();
          img.onload = () => res(img);
          img.onerror = rej;
          img.src = src;
        }))).then(imgs => {
          const ctx = strip.getContext("2d");
          imgs.forEach((img, i) => {
            const scale = SW / img.naturalWidth;
            ctx.drawImage(img, i * SW, 0, SW, img.naturalHeight * scale);
          });
          tex.needsUpdate = true;
        }).catch(() => {});
      }

      let screenMat = null;

      const clamp  = (a, b, t) => Math.min(1, Math.max(0, (t - a) / (b - a)));
      const smooth = t => t * t * (3 - 2 * t);
      const lrp    = (a, b, t) => a + (b - a) * t;
      const eIO    = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;

      function apply(p) {
        const rise   = smooth(clamp(0.00, 0.15, p));
        const rotate = smooth(clamp(0.15, 0.40, p));
        const pageT  = clamp(0.60, 1.00, p);

        let rotY = lrp(0.07, Math.PI * 0.28, rise);
        if (p >= 0.15) rotY = lrp(Math.PI * 0.28, Math.PI - 0.06, eIO(rotate));
        if (p >= 0.40) rotY = Math.PI - 0.06;

        const rotX = lrp(0.15, 0.0, smooth(clamp(0.0, 0.30, p)));
        const posY = lrp(-1.3, 0.0, smooth(clamp(0.0, 0.15, p)));

        rig.rotation.y = rotY;
        rig.rotation.x = rotX;
        rig.position.y = posY;
        camera.position.set(0, 0.3, 3.0);
        camera.lookAt(0, 0.1, 0);

        // Exposure rises with phone so back/sides are visible during rise & turn.
        // Reaches full by p=0.42 (when screen snaps on) so cameras never show through.
        renderer.toneMappingExposure = lrp(0.0, 0.92, smooth(clamp(0.05, 0.42, p)));

        if (screenMat) {
          // FrontSide mesh — not rendered while back faces camera (p < 0.15).
          // Black from rotation start; content snaps in at p=0.46.
          const opacity = p >= 0.15 ? 1 : 0;
          screenMat.opacity     = opacity;
          screenMat.transparent = opacity < 1;

          const showContent = p >= 0.46;
          screenMat.color.setRGB(showContent ? 1 : 0, showContent ? 1 : 0, showContent ? 1 : 0);

          let off = 0;
          if      (pageT < 0.30) off = 0;
          else if (pageT < 0.46) off = lrp(0,     1/3, eIO(clamp(0.30, 0.46, pageT)));
          else if (pageT < 0.62) off = 1/3;
          else if (pageT < 0.78) off = lrp(1/3,   2/3, eIO(clamp(0.62, 0.78, pageT)));
          else                   off = 2/3;
          tex.offset.x    = off;
          tex.needsUpdate = true;
        }
      }

      const state = { p: reduce ? 0.50 : 0 };
      apply(state.p);

      const draco = new DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
      const loader = new GLTFLoader();
      loader.setDRACOLoader(draco);

      loader.load(modelSrc, (gltf) => {
        if (disposed) return;
        const model = gltf.scene;

        // Scale first, then re-center on post-scale bbox (prevents lateral drift)
        const box  = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        model.scale.setScalar(0.9 / Math.max(size.x, size.z));
        const box2   = new THREE.Box3().setFromObject(model);
        const center = box2.getCenter(new THREE.Vector3());
        model.position.sub(center);
        rig.add(model);

        // Find screen mesh by name keyword
        let screenMesh = null;
        model.traverse(o => {
          if (!o.isMesh) return;
          const n = o.name.toLowerCase();
          if (!screenMesh && (n.includes("screen") || n.includes("display") || n.includes("lcd")))
            screenMesh = o;
        });

        if (screenMesh) {
          // Remap UVs from geometry XZ positions (original atlas UVs are unusable)
          const geo = screenMesh.geometry;
          const pos = geo.attributes.position;
          let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i), z = pos.getZ(i);
            if (x < mnX) mnX = x; if (x > mxX) mxX = x;
            if (z < mnZ) mnZ = z; if (z > mxZ) mxZ = z;
          }
          const rX = mxX - mnX, rZ = mxZ - mnZ;
          const uvBuf = new Float32Array(pos.count * 2);
          for (let i = 0; i < pos.count; i++) {
            // Flip U: at rotY=π local +X faces camera-left, so mirror to read correctly
            uvBuf[i*2]   = 1 - (pos.getX(i) - mnX) / rX;
            uvBuf[i*2+1] = 1 - (pos.getZ(i) - mnZ) / rZ;
          }
          geo.setAttribute("uv", new THREE.BufferAttribute(uvBuf, 2));

          screenMat = new THREE.MeshBasicMaterial({
            map: tex, toneMapped: false,
            opacity: 0, transparent: true,
            polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
          });
          screenMesh.material = screenMat;
        }

        // Sphere lenses physically protrude through the phone front face — hide them
        const HIDE = /^(Sphere\d*_Lens|CameraModuleGlass)/i;
        model.traverse(o => {
          if (o.isMesh && HIDE.test(o.name)) o.visible = false;
        });

        apply(state.p);
      }, undefined, () => { if (!disposed) setFailed(true); });

      if (!reduce) {
        const tw = gsap.to(state, {
          p: 1, ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top top", end: "bottom bottom", scrub: 0.6,
          },
          onUpdate: () => apply(state.p),
        });
        const st = tw.scrollTrigger;
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        const timer = setTimeout(refresh, 1500);
        cleanups.push(() => {
          window.removeEventListener("load", refresh);
          clearTimeout(timer);
          st.kill();
        });
      }

      let running = true;
      const io = new IntersectionObserver(
        e => { running = e[0]?.isIntersecting ?? true; },
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

      cleanups.push(() => {
        renderer.setAnimationLoop(null);
        ro.disconnect();
        io.disconnect();
        scene.traverse(o => {
          if (!o.isMesh) return;
          o.geometry?.dispose();
          (Array.isArray(o.material) ? o.material : [o.material])
            .forEach(m => { m?.map?.dispose(); m?.dispose(); });
        });
        renderer.dispose();
        draco.dispose();
        tex.dispose();
      });
    })();

    return () => {
      disposed = true;
      cleanups.forEach(fn => fn());
    };
  }, [modelSrc]); // slides intentionally omitted — treated as static at mount

  if (failed) {
    return fallbackImageSrc ? (
      <div className="phone-scene phone-scene--fallback">
        <img src={fallbackImageSrc} alt="VioletCraftworks mobile view" />
      </div>
    ) : null;
  }

  return (
    <div className="phone-scene" ref={trackRef}>
      <div className="phone-scene__stage">
        <canvas className="phone-scene__canvas" ref={canvasRef} />
      </div>
    </div>
  );
}
