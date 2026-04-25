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
  },
  {
    slug: "shelfsaver",
    title: "LeftoverChef — AI Meal Planner",
    desc: "Turned leftover anxiety into a cooking plan and made sustainability feel personal.",
    thumb: "/LeftoverChef.png",
  },
];

const skills = [
  { label: "UX Research", sub: "Interviews · Surveys · Usability Testing" },
  { label: "Interaction Design", sub: "Wireframes · Prototyping · Figma" },
  { label: "Information Architecture", sub: "Flows · Systems · IA" },
  { label: "Front-End", sub: "React · HTML / CSS / JS" },
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

  return (
    <div className="home-page">
      <Header />

      <main className="home-wrap">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              {typed}
              <span className={`typewriter-cursor${cursorDone ? " blink" : ""}`}>|</span>
            </h1>
            <div className="hero-role">UX / UI Designer</div>

            <p className="hero-desc">
              Designing clear, human-centered interfaces backed by research and systems thinking.
            </p>

            <div className="hero-actions">
              <Link className="btn primary" to="/projects">
                View Projects
              </Link>
              <Link className="btn ghost" to="/resume">
                Resume
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-portrait">
              <img className="hero-img" src={heroImg} alt="Ashley" />
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="featured">
          <h2 className="section-title">Featured Projects</h2>

          <div className="card-grid">
            {featured.map((p) => (
              <div key={p.slug} className="work-card">
                <div className="work-thumb">
                  {p.thumb ? (
                    <img
                      src={process.env.PUBLIC_URL + p.thumb}
                      alt={`${p.title} thumbnail`}
                    />
                  ) : (
                    <div className="thumb-placeholder" />
                  )}
                </div>

                <div className="work-body">
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
        <section className="skills-strip">
          <h2 className="section-title">What I bring</h2>

          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.label} className="skill-card">
                <div className="skill-label">{s.label}</div>
                <div className="skill-sub">{s.sub}</div>
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
