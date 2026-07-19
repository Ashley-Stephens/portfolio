import React, { useEffect, useRef, useState } from "react";
import "./DuoScene.scss";

const LID_OPEN_FRAC = 0.3;

export default function DuoScene({
  laptopModelSrc,
  laptopScreenSrc,
  phoneModelSrc,
  phoneSlides,
  fallbackImageSrc,
}) {
  const trackRef     = useRef(null);
  const laptopCanvas = useRef(null);
  const phoneCanvas  = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!window.WebGLRenderingContext) { setFailed(true); return; }

    const reduce  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed  = false;
    const cleanup = [];

    (async () => {
      const THREE               = await import("three");
      const { GLTFLoader }      = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { DRACOLoader }     = await import("three/examples/jsm/loaders/DRACOLoader.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { default: gsap }   = await import("gsap");
      const { ScrollTrigger }   = await import("gsap/ScrollTrigger");
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const draco = new DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
      const loader = new GLTFLoader();
      loader.setDRACOLoader(draco);

      // ── helpers ───────────────────────────────────────────────────────────
      const clamp  = (a, b, t) => Math.min(1, Math.max(0, (t - a) / (b - a)));
      const smooth = t => t * t * (3 - 2 * t);
      const lrp    = (a, b, t) => a + (b - a) * t;
      const eIO    = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;

      // ── LAPTOP ────────────────────────────────────────────────────────────
      const lr = new THREE.WebGLRenderer({ canvas: laptopCanvas.current, antialias: true, alpha: true });
      lr.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 3));
      lr.toneMapping         = THREE.ACESFilmicToneMapping;
      lr.toneMappingExposure = 0.92;
      lr.setClearColor(0x000000, 0);

      const lScene = new THREE.Scene();
      const lPmrem = new THREE.PMREMGenerator(lr);
      lScene.environment = lPmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      lPmrem.dispose();

      const lCamera = new THREE.PerspectiveCamera(36, 1, 0.01, 100);
      const lRig    = new THREE.Group();
      lScene.add(lRig);

      const lKey = new THREE.DirectionalLight(0xfff2e6, 1.7); lKey.position.set(0.4, 0.6, 0.5); lScene.add(lKey);
      const lRim = new THREE.DirectionalLight(0xbcd4ff, 1.3); lRim.position.set(-0.5, 0.3, -0.4); lScene.add(lRim);
      lScene.add(new THREE.AmbientLight(0xffffff, 0.15));

      let lMixer = null, lClipDur = 1;
      const lState = { p: reduce ? 1 : 0 };

      function applyLaptop(p) {
        const enter  = smooth(clamp(0.0, 0.08, p));
        const lidP   = smooth(clamp(0.08, 0.72, p));
        const turn   = smooth(clamp(0.08, 0.85, p));
        const settle = smooth(clamp(0.72, 1.0,  p));
        if (lMixer) lMixer.setTime(lidP * LID_OPEN_FRAC * lClipDur);
        lRig.rotation.y = THREE.MathUtils.lerp(-0.5, -0.22, turn);
        lRig.rotation.x = THREE.MathUtils.lerp(0.12, -0.02, turn);
        lRig.position.y = THREE.MathUtils.lerp(-0.08, 0.05, enter);
        lRig.scale.setScalar(THREE.MathUtils.lerp(0.94, 1.0, enter));
        lCamera.position.set(0, 0.4, THREE.MathUtils.lerp(2.7, 3.0, settle));
        lCamera.lookAt(0, 0.22, 0);
      }
      applyLaptop(lState.p);

      loader.load(laptopModelSrc, (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        const box   = new THREE.Box3().setFromObject(model);
        const size  = box.getSize(new THREE.Vector3());
        model.position.sub(box.getCenter(new THREE.Vector3()));
        const s = 0.9 / Math.max(size.x, size.z);
        model.scale.setScalar(s);
        lRig.add(model);

        const screen = model.getObjectByName("Object_7");
        if (screen && laptopScreenSrc) {
          new THREE.TextureLoader().load(laptopScreenSrc, (t) => {
            t.colorSpace = THREE.SRGBColorSpace;
            t.flipY = false;
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            const zoom = 0.85;
            t.repeat.set(zoom, -zoom);
            t.offset.set((1 - zoom) / 2, zoom);
            t.anisotropy = lr.capabilities.getMaxAnisotropy();
            const m = new THREE.MeshBasicMaterial({ map: t, toneMapped: false });
            m.color = new THREE.Color(0xececec);
            m.polygonOffset = true; m.polygonOffsetFactor = -4; m.polygonOffsetUnits = -4;
            screen.material = m;
          });
        }
        if (gltf.animations?.[0]) {
          lMixer    = new THREE.AnimationMixer(model);
          lMixer.clipAction(gltf.animations[0]).play();
          lClipDur  = gltf.animations[0].duration;
        }
        applyLaptop(lState.p);
      }, undefined, () => { if (!disposed) setFailed(true); });

      // ── PHONE ─────────────────────────────────────────────────────────────
      const pr = new THREE.WebGLRenderer({ canvas: phoneCanvas.current, antialias: true, alpha: true });
      pr.setPixelRatio(Math.min(window.devicePixelRatio, 3));
      pr.toneMapping         = THREE.ACESFilmicToneMapping;
      pr.toneMappingExposure = 0;
      pr.setClearColor(0x000000, 0); // transparent clear so canvas is invisible before phone rises

      const pScene = new THREE.Scene();
      const pPmrem = new THREE.PMREMGenerator(pr);
      pScene.environment = pPmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pPmrem.dispose();

      const pCamera = new THREE.PerspectiveCamera(36, 1, 0.01, 100);
      const pRig    = new THREE.Group();
      pScene.add(pRig);

      const pKey  = new THREE.DirectionalLight(0xfff2e6, 2.0); pKey.position.set(0.4, 0.6, 0.5);   pScene.add(pKey);
      const pRim  = new THREE.DirectionalLight(0xbcd4ff, 1.4); pRim.position.set(-0.5, 0.3, -0.4); pScene.add(pRim);
      const pFill = new THREE.DirectionalLight(0xffffff, 0.7); pFill.position.set(0.1, 0.2, 1.5);  pScene.add(pFill);
      pScene.add(new THREE.AmbientLight(0xffffff, 0.25));

      // Filmstrip: 3 slides at native source resolution (1290×2796) so the
      // phone screen is sharp. 3×1290 = 3870 fits the 4096 WebGL max-texture
      // floor. Uploaded to the GPU once at load — cheap at render time.
      const SW = 1290, SH = 2796;
      const strip = document.createElement("canvas");
      strip.width = SW * 3; strip.height = SH;
      const tex = new THREE.CanvasTexture(strip);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.flipY      = false;
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1 / 3, 1);
      tex.offset.set(0, 0);
      tex.anisotropy = pr.capabilities.getMaxAnisotropy();

      if (phoneSlides?.length) {
        Promise.all(phoneSlides.map(src => new Promise((res, rej) => {
          const img = new Image(); img.onload = () => res(img); img.onerror = rej; img.src = src;
        }))).then(imgs => {
          const ctx = strip.getContext("2d");
          imgs.forEach((img, i) => {
            ctx.drawImage(img, i * SW, 0, SW, img.naturalHeight * (SW / img.naturalWidth));
          });
          tex.needsUpdate = true;
        }).catch(() => {});
      }

      let screenMat = null;
      const pState  = { p: reduce ? 0.50 : 0 };

      function applyPhone(p) {
        const rise   = smooth(clamp(0.00, 0.15, p));
        const rotate = smooth(clamp(0.15, 0.40, p));
        const pageT  = clamp(0.60, 1.00, p);

        let rotY = lrp(0.07, Math.PI * 0.28, rise);
        if (p >= 0.15) rotY = lrp(Math.PI * 0.28, Math.PI - 0.06, eIO(rotate));
        if (p >= 0.40) rotY = Math.PI - 0.06;

        pRig.rotation.y = rotY;
        pRig.rotation.x = lrp(0.15, 0.0, smooth(clamp(0.0, 0.30, p)));
        pRig.position.y = lrp(-2.0, 0.0, smooth(clamp(0.0, 0.15, p)));
        pCamera.position.set(0, 0.3, 5.5);
        pCamera.lookAt(0, 0.1, 0);
        pr.toneMappingExposure = lrp(0.45, 0.92, smooth(clamp(0.0, 0.35, p)));

        if (screenMat) {
          const opacity = p >= 0.15 ? 1 : 0;
          screenMat.opacity     = opacity;
          screenMat.transparent = opacity < 1;
          const show = p >= 0.46;
          screenMat.color.setRGB(show ? 1 : 0, show ? 1 : 0, show ? 1 : 0);
          let off = 0;
          if      (pageT < 0.30) off = 0;
          else if (pageT < 0.46) off = lrp(0,   1/3, eIO(clamp(0.30, 0.46, pageT)));
          else if (pageT < 0.62) off = 1/3;
          else if (pageT < 0.78) off = lrp(1/3, 2/3, eIO(clamp(0.62, 0.78, pageT)));
          else off = 2/3;
          // offset is a uniform — no needsUpdate, which would re-upload the
          // whole filmstrip to the GPU every scroll frame
          tex.offset.x = off;
        }
      }
      applyPhone(pState.p);

      loader.load(phoneModelSrc, (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        const box   = new THREE.Box3().setFromObject(model);
        const size  = box.getSize(new THREE.Vector3());
        model.scale.setScalar(0.9 / Math.max(size.x, size.z));
        const box2 = new THREE.Box3().setFromObject(model);
        model.position.sub(box2.getCenter(new THREE.Vector3()));
        pRig.add(model);

        let screenMesh = null;
        model.traverse(o => {
          if (!o.isMesh) return;
          const n = o.name.toLowerCase();
          if (!screenMesh && (n.includes("screen") || n.includes("display") || n.includes("lcd")))
            screenMesh = o;
        });

        if (screenMesh) {
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
            uvBuf[i*2]   = 1 - (pos.getX(i) - mnX) / rX;
            uvBuf[i*2+1] = 1 - (pos.getZ(i) - mnZ) / rZ;
          }
          geo.setAttribute("uv", new THREE.BufferAttribute(uvBuf, 2));
          screenMat = new THREE.MeshBasicMaterial({
            map: tex, toneMapped: false, opacity: 0, transparent: true,
            polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
          });
          screenMesh.material = screenMat;
        }

        const HIDE = /^(Sphere\d*_Lens|CameraModuleGlass)/i;
        model.traverse(o => { if (o.isMesh && HIDE.test(o.name)) o.visible = false; });
        applyPhone(pState.p);
      }, undefined, () => { if (!disposed) setFailed(true); });

      // ── Shared scroll trigger (one timeline, two progress windows) ────────
      // t: 0..1 over the 600vh track
      // Laptop: 0..0.38 → laptop p 0..1 (done opening when phone begins)
      // Phone:  0.30..1.00 → phone p 0..1 (rises while laptop is ~79% done)
      if (!reduce) {
        const shared = { t: 0 };
        const tw = gsap.to(shared, {
          t: 1, ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top top", end: "bottom bottom", scrub: 0.6,
          },
          onUpdate: () => {
            const t = shared.t;
            lState.p = Math.min(1, t / 0.38);
            pState.p = Math.max(0, (t - 0.30) / 0.70);
            applyLaptop(lState.p);
            applyPhone(pState.p);
            // Hide phone canvas until it starts rising so no black rectangle sits idle
            if (phoneCanvas.current) {
              phoneCanvas.current.style.opacity = t >= 0.28 ? '1' : '0';
            }
          },
        });
        const st = tw.scrollTrigger;
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        const timer = setTimeout(refresh, 1500);
        cleanup.push(() => {
          window.removeEventListener("load", refresh);
          clearTimeout(timer);
          st.kill();
        });
      }

      // ── Render loops + resize observers ───────────────────────────────────
      let running = true;
      const io = new IntersectionObserver(
        e => { running = e[0]?.isIntersecting ?? true; },
        { threshold: 0.01 }
      );
      io.observe(trackRef.current);

      function resizeLaptop() {
        const c = laptopCanvas.current;
        const w = c.clientWidth, h = c.clientHeight;
        if (!w || !h) return;
        lr.setSize(w, h, false);
        lCamera.aspect = w / h;
        lCamera.updateProjectionMatrix();
      }
      function resizePhone() {
        const c = phoneCanvas.current;
        const w = c.clientWidth, h = c.clientHeight;
        if (!w || !h) return;
        pr.setSize(w, h, false);
        pCamera.aspect = w / h;
        pCamera.updateProjectionMatrix();
      }
      const lro = new ResizeObserver(resizeLaptop); lro.observe(laptopCanvas.current);
      const pro = new ResizeObserver(resizePhone);  pro.observe(phoneCanvas.current);
      resizeLaptop(); resizePhone();

      lr.setAnimationLoop(() => { if (running) lr.render(lScene, lCamera); });
      pr.setAnimationLoop(() => { if (running) pr.render(pScene, pCamera); });

      cleanup.push(() => {
        lr.setAnimationLoop(null);
        pr.setAnimationLoop(null);
        lro.disconnect(); pro.disconnect(); io.disconnect();
        [lScene, pScene].forEach(sc => sc.traverse(o => {
          if (!o.isMesh) return;
          o.geometry?.dispose();
          (Array.isArray(o.material) ? o.material : [o.material])
            .forEach(m => { m?.map?.dispose(); m?.dispose(); });
        }));
        lr.dispose(); pr.dispose(); draco.dispose(); tex.dispose();
      });
    })();

    return () => { disposed = true; cleanup.forEach(fn => fn()); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [laptopModelSrc, laptopScreenSrc, phoneModelSrc]);

  if (failed) {
    return fallbackImageSrc ? (
      <div className="duo-scene duo-scene--fallback">
        <img src={fallbackImageSrc} alt="VioletCraftworks" />
      </div>
    ) : null;
  }

  return (
    <div className="duo-scene" ref={trackRef}>
      <div className="duo-scene__stage">
        <div className="duo-scene__laptop-wrap">
          <canvas className="duo-scene__laptop-canvas" ref={laptopCanvas} />
        </div>
        <div className="duo-scene__phone-wrap">
          <canvas className="duo-scene__phone-canvas" ref={phoneCanvas} />
        </div>
      </div>
    </div>
  );
}
