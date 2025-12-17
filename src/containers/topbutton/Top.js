import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  useEffect(() => {
    const onScroll = () => {
      const btn = document.getElementById("topButton"); // <-- use whatever ID your button has
      if (!btn) return; // ✅ prevents “null.style” crash on /resume

      const y = document.documentElement.scrollTop || document.body.scrollTop;
      btn.style.display = y > 200 ? "block" : "none";
    };

    window.addEventListener("scroll", onScroll, {passive: true});
    onScroll(); // set initial state

    return () => window.removeEventListener("scroll", onScroll); // ✅ cleanup on route change
  }, []);

  return (
    <button id="topButton" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
      ↑
    </button>
  );
}
