import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Main.scss";

const HERO_TEXT = "Hey, I'm Ashley";

const featured = [
  {
    slug: "violetcraftworks",
    title: "VioletCraftworks · Cross-Stitch Pattern Shop",
    desc: "Solo-built storefront for a real PDF-pattern shop. Designed and coded end to end in Next.js.",
    thumb: "/VioletCraftworks/violetcraftworks_thumb.png",
    tag: "End-to-End Product",
  },
  {
    slug: "mixflow",
    title: "Mixflow · Music Playback UX",
    desc: "Redesigned shuffle to restore user trust and bring forgotten tracks back to life.",
    thumb: "/Mixflow.png",
    tag: "Interaction Design",
  },
];

const strengthsIntro =
  "I do my best work when a product needs to feel simpler to use without throwing out the real constraints behind it.";

const strengths = [
  { title: "Making the vague concrete", body: "Taking a half-formed idea and turning it into a flow someone can follow." },
  { title: "Friendly without the clutter", body: "Designing interfaces that stay approachable as more gets added to them." },
  { title: "Design that survives the build", body: "Writing the front end myself, so the shipped site matches what was in Figma." },
  { title: "Edge cases up front", body: "Handling accessibility, empty states, and content limits while designing, not after." },
  { title: "AI & agentic workflows", body: "Using LLMs, Claude, and agentic tools to move faster, automate repetitive work, and build smarter products." },
];

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
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Header />

      <main className="home-wrap">
        {/* HERO */}
        <section className="hp-hero">
          <div className="hp-hero-left">
            <div className="hp-eyebrow">
              <span className="hp-eyebrow-line" />
              UX / UI Designer · Front-End Developer
            </div>

            <h1 className="hp-h1">
              {typed}
              <span className={`typewriter-cursor${cursorDone ? " blink" : ""}`}>|</span>
            </h1>

            <div className="hp-role-tag">Human-centered design</div>

            <p className="hp-desc">
              Designing clear interfaces backed by research and systems thinking, from wireframe to shipped product.
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

        {/* DIVIDER */}
        <div className="hp-divider" aria-hidden="true">
          <span className="hp-divider-line" />
          <span className="hp-divider-dot" />
          <span className="hp-divider-dot" />
          <span className="hp-divider-dot" />
          <span className="hp-divider-line" />
        </div>

        {/* FEATURED PROJECTS */}
        <section className="hp-section hp-reveal">
          <div className="hp-section-label">
            <span className="hp-section-label-line" />
            <span>01 · Selected work</span>
          </div>
          <h2 className="hp-h2">Featured projects</h2>

          <div className="card-grid">
            {featured.map((p) => (
              <Link key={p.slug} className="work-card" to={`/projects/${p.slug}`}>
                <div className="work-thumb">
                  <img
                    src={process.env.PUBLIC_URL + p.thumb}
                    alt={`${p.title} thumbnail`}
                  />
                </div>
                <div className="work-body">
                  <div className="work-tag">
                    {p.tag}
                    {p.wip && <span className="work-wip">Live</span>}
                  </div>
                  <div className="work-title">{p.title}</div>
                  <div className="work-desc">{p.desc}</div>
                  <span className="work-link">View case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* WHERE I'M STRONGEST */}
        <section className="hp-section hp-reveal">
          <div className="hp-section-label">
            <span className="hp-section-label-line" />
            <span>02 · Where I'm strongest</span>
          </div>
          <div className="hp-strength-head">
            <h2 className="hp-h2 hp-strength-head__title">Where I&apos;m strongest</h2>
            <p className="hp-strength-intro">{strengthsIntro}</p>
          </div>

          <div className="hp-strength-grid">
            {strengths.map((s) => (
              <div key={s.title} className="hp-strength">
                <span className="hp-strength-rule" />
                <div className="hp-strength-title">{s.title}</div>
                <div className="hp-strength-body">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="hp-section hp-reveal">
          <div className="hp-section-label">
            <span className="hp-section-label-line" />
            <span>03 · Capabilities</span>
          </div>
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

      </main>

      <Footer />
    </div>
  );
};

export default Main;
