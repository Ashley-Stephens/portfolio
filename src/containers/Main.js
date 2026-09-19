import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Main.scss";

const HERO_TEXT = "Hey, I'm Ashley";

const capabilities = [
  {
    group: "Strategy & UX",
    items: [
      { n: "01", title: "Research synthesis", body: "Turn interviews and notes into the few requirements that drive the design." },
      { n: "02", title: "Information architecture", body: "Organize content and navigation so people find things without stopping to think." },
      { n: "03", title: "User flows", body: "Map the path from first tap to done, then cut the steps that don't earn their place." },
    ],
  },
  {
    group: "Interface design",
    items: [
      { n: "04", title: "Wireframes & prototypes", body: "Move from rough to high fidelity in Figma, testing the idea before it gets polished." },
      { n: "05", title: "Visual systems", body: "Set type, color, and spacing as a system so the product stays consistent as it grows." },
      { n: "06", title: "Accessible UI", body: "Contrast, keyboard support, and clear states built in while designing, not patched later." },
    ],
  },
  {
    group: "Front-end",
    items: [
      { n: "07", title: "React & Next.js", body: "Build the design in real code instead of handing off a flat file." },
      { n: "08", title: "Responsive layouts", body: "Make it hold up from a phone to a wide monitor." },
      { n: "09", title: "SEO & performance", body: "Clean markup, metadata, and fast pages so the work gets found and loads fast." },
    ],
  },
  {
    group: "Testing & Validation",
    items: [
      { n: "10", title: "Usability testing", body: "Put real tasks in front of real users and fix what breaks before it ships." },
      { n: "11", title: "A/B testing", body: "Run controlled variants on copy, layouts, and CTAs to let data pick the winner." },
      { n: "12", title: "Iterative testing", body: "Test early and often across prototype rounds so changes are cheap instead of costly." },
    ],
  },
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

        {/* ── STRENGTHS + CAPABILITIES ─────────────────── */}
        <div className="home-wrap home-wrap--mid">

          <section className="hp-section hp-reveal">
            <div className="hp-section-label">
              <span>Where I'm strongest</span>
            </div>
            <div className="hp-strength-head">
              <h2 className="hp-h2 hp-strength-head__title">Where I&apos;m strongest</h2>
              <p className="hp-strength-intro">{strengthsIntro}</p>
            </div>

          </section>

          <section className="hp-section hp-reveal">
            <h2 className="hp-h2">My approach</h2>

            <div className="hp-cap">
              {capabilities.map((g) => (
                <div key={g.group} className="hp-cap-group">
                  <div className="hp-cap-group-label">{g.group}</div>
                  <div className="hp-cap-items">
                    {g.items.map((it) => (
                      <div key={it.n} className="hp-cap-item">
                        <span className="hp-cap-num">{it.n}</span>
                        <div className="hp-cap-text">
                          <div className="hp-cap-title">{it.title}</div>
                          <div className="hp-cap-body">{it.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
