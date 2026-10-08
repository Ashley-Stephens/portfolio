import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Main.scss";

const HERO_TEXT = "Hey, I'm Ashley";

const tools = [
  // Figma + Claude stay mid-list so they sit at the center of the row
  { name: "Adobe Creative Cloud", src: "adobe.svg", href: "https://www.adobe.com/creativecloud.html" },
  { name: "Canva", src: "canva.svg", href: "https://www.canva.com/" },
  { name: "HTML5", src: "html.svg", href: "https://www.w3.org/TR/2011/WD-html5-20110405/" },
  { name: "CSS3", src: "css.svg", href: "https://www.w3.org/Style/CSS/specs.en.html" },
  { name: "JavaScript", src: "javascript.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Figma", src: "figma.svg", href: "https://www.figma.com/" },
  { name: "Claude", src: "claude.svg", href: "https://claude.ai/" },
  { name: "TypeScript", src: "typescript.svg", href: "https://www.typescriptlang.org/" },
  { name: "React", src: "react.svg", href: "https://react.dev/" },
  { name: "Next.js", src: "nextjs.svg", href: "https://nextjs.org/" },
  { name: "Cloudflare", src: "cloudflare.svg", href: "https://www.cloudflare.com/" },
];

const Main = () => {
  const heroImg = process.env.PUBLIC_URL + "/ashley.png";
  const vcThumb = process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks_thumb.png";
  const mfThumb = process.env.PUBLIC_URL + "/Mixflow.png";

  const [typed, setTyped] = useState("");
  const [cursorDone, setCursorDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(HERO_TEXT.slice(0, i));
      if (i >= HERO_TEXT.length) {
        clearInterval(interval);
        setCursorDone(true);
      }
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".hp-reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("hp-visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Header />

      <main>
        {/* ── HERO ──────────────────────────────────────── */}
        <div className="home-wrap">
          <section className="hp-hero">
            <div className="hp-hero-left">
              <div className="hp-eyebrow">
                UX / UI Designer and Front-End Developer
              </div>

              <h1 className="hp-h1">
                {typed}
                <span className={`typewriter-cursor${cursorDone ? " blink" : ""}`}>|</span>
              </h1>

              <p className="hp-desc">
                I turn research into interfaces people can use, then build them in code.
              </p>

              <div className="hp-actions">
                <Link className="hp-btn-primary" to="/projects">View projects</Link>
                <Link className="hp-btn-ghost" to="/resume">Resume</Link>
              </div>
            </div>

            <div className="hp-hero-right">
              <div className="hero-portrait">
                <img className="hero-img" src={heroImg} alt="Ashley Stephens" />
              </div>
            </div>
          </section>
        </div>

        {/* ── VIOLETCRAFTWORKS (cream/lavender chapter) ─── */}
        <section className="vc-editorial hp-reveal" aria-labelledby="vc-heading">
          <div className="vc-inner">
            <div className="vc-content">
              <div className="vc-eyebrow">
                End-to-End Product
              </div>

              <h2 className="vc-title" id="vc-heading">VioletCraftworks</h2>
              <p className="hp-vc-sub">Cross-Stitch Pattern Shop</p>

              <p className="vc-desc">
                Solo-built storefront for a real PDF-pattern shop. Designed and coded
                end to end in Next.js — from product strategy to deployed storefront.
              </p>

              <div className="vc-pills">
                <span className="vc-pill">Responsive</span>
                <span className="vc-pill">Designed by me</span>
                <span className="vc-pill">Built by me</span>
              </div>

              <Link className="vc-cta" to="/projects/violetcraftworks">
                View case study →
              </Link>
            </div>

            <div className="vc-media">
              <img
                className="vc-hoop"
                src={process.env.PUBLIC_URL + "/VioletCraftworks/embroidery-hoop.webp"}
                alt=""
                aria-hidden="true"
              />
              <img
                className="vc-img"
                src={vcThumb}
                alt="VioletCraftworks interface"
              />
            </div>
          </div>
        </section>

        {/* ── MIXFLOW (dark navy chapter) ───────────────── */}
        <section className="mf-editorial hp-reveal" aria-labelledby="mf-heading">
          <div className="mf-inner">
            <div className="mf-media">
              <div className="mf-vinyl-slot" aria-hidden="true">
                <div className="mf-vinyl">
                  <div className="mf-vinyl-label" />
                </div>
              </div>
              <img
                className="mf-img"
                src={mfThumb}
                alt="Mixflow music playback interface"
              />
            </div>

            <div className="mf-content">
              <div className="mf-eyebrow">
                Interaction Design
              </div>

              <h2 className="mf-title" id="mf-heading">Mixflow</h2>
              <p className="mf-sub">Music Playback UX</p>

              <p className="mf-desc">
                Redesigned shuffle so the whole library gets heard, not just the
                same ten songs. Research-backed, prototyped in Figma, tested with
                real users.
              </p>

              <Link className="mf-cta" to="/projects/mixflow">
                View case study →
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW I WORK ─────────────────── */}
        <div className="home-wrap home-wrap--mid">

          <section className="hp-section hp-reveal">
            <h2 className="hp-h2 hp-strength-head__title hp-tools-title">How I Work</h2>

            <div className="hp-tools">
              {tools.map((t) => (
                <a key={t.name} className="hp-tool" href={t.href} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/tools/${t.src}`} alt={`${t.name} logo`} />
                  <span className="hp-tool-tip">{t.name}</span>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
