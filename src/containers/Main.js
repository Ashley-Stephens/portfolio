import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Main.scss";

const HERO_TEXT = "Hey, I'm Ashley";

const featured = [
  {
    slug: "mixflow",
    title: "Mixflow — Music Playback UX",
    desc: "Redesigned shuffle to restore user trust and bring forgotten tracks back to life.",
    thumb: "/Mixflow.png",
    tag: "Interaction Design",
  },
  {
    slug: "shelfsaver",
    title: "LeftoverChef — AI Meal Planner",
    desc: "Turned leftover anxiety into a cooking plan. Made sustainability feel personal, not preachy.",
    thumb: "/LeftoverChef.png",
    tag: "End-to-End Design",
  },
];

const skills = [
  { label: "UX Research", sub: ["Interviews", "Surveys", "Usability Testing"] },
  { label: "Interaction Design", sub: ["Wireframes", "Prototyping", "Figma"] },
  { label: "Information Architecture", sub: ["Flows", "Systems", "IA"] },
  { label: "Front-End", sub: ["React", "HTML / CSS / JS", "SCSS"] },
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
              UX / UI Designer · 2025
            </div>

            <h1 className="hp-h1">
              {typed}
              <span className={`typewriter-cursor${cursorDone ? " blink" : ""}`}>|</span>
            </h1>

            <div className="hp-role-tag">Human-centered design</div>

            <p className="hp-desc">
              Designing clear interfaces backed by research and systems thinking — from wireframe to shipped product.
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
              <div key={p.slug} className="work-card">
                <div className="work-thumb">
                  <img
                    src={process.env.PUBLIC_URL + p.thumb}
                    alt={`${p.title} thumbnail`}
                  />
                </div>
                <div className="work-body">
                  <div className="work-tag">{p.tag}</div>
                  <div className="work-title">{p.title}</div>
                  <div className="work-desc">{p.desc}</div>
                  <Link className="work-link" to={`/projects/${p.slug}`}>
                    View case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="hp-section hp-reveal">
          <div className="hp-section-label">
            <span className="hp-section-label-line" />
            <span>02 · Capabilities</span>
          </div>
          <h2 className="hp-h2">What I bring</h2>

          <div className="hp-skills-grid">
            {skills.map((s) => (
              <div key={s.label} className="hp-skill">
                <div className="hp-skill-label">{s.label}</div>
                <div className="hp-skill-sub">
                  {s.sub.map((line, i) => <span key={i}>{line}</span>)}
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
