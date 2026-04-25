import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AboutPage.scss";

const experience = [
  {
    role: "Independent Designer & Shop Owner",
    company: "Self-employed",
    period: "Oct 2024 – Present",
    detail: "Founded a digital design shop creating original cross-stitch patterns. 300+ sales: designed, marketed, and iterated on products based on real customer demand.",
  },
  {
    role: "Software Design Intern",
    company: "Data Physics Corporation",
    period: "Jun – Sep 2024",
    detail: "Owned end-to-end design and development of a Flutter mobile app: research, UX design, and implementation of real-time data visualization for enterprise software.",
  },
  {
    role: "UX & Marketing Intern",
    company: "Mocaa",
    period: "Jul – Sep 2023",
    detail: "Audited the homepage and chat UX; 75% of proposed improvements were implemented. Conducted undercover user testing to improve the student booking experience.",
  },
];

const tools = ["Figma", "React", "HTML / CSS", "Canva", "Usability Testing", "Wireframing", "Prototyping"];

export default function AboutPage() {
  const aboutImgUrl = process.env.PUBLIC_URL + "/about_picture.png";

  return (
    <>
      <Header />

      <main className="about-page">
        <div className="about-card">

          {/* ── LEFT ─────────────────────────────────────────── */}
          <div className="about-left">

            <div className="about-intro">
              <h1 className="about-title">Hi, I'm Ashley.</h1>

              <p className="about-body">
                I'm a CS student at Santa Clara University with a focus in UX/UI design.
                I like figuring out why things frustrate people, then fixing them.
              </p>

              <p className="about-body">
                My path into UX came naturally from studying CS. I kept caring more
                about <em>how</em> something felt to use than how it was built under the hood.
                That curiosity led me to research, prototyping, and eventually shipping
                real interfaces. I care a lot about empathy, clear hierarchy, and
                designs that get out of the user's way.
              </p>

              <p className="about-body">
                Outside of design work, I run my own shop selling original cross-stitch
                patterns, which has taught me more about iterating on a product based
                on real audience feedback than any class has.
              </p>
            </div>

            {/* Cert */}
            <div className="about-cert">
              <span className="about-cert-badge">Certified</span>
              <span className="about-cert-text">
                Google UX Design Specialization &nbsp;·&nbsp; Issued Aug 2025
              </span>
            </div>

            {/* Experience */}
            <div className="about-section">
              <h2 className="about-section-title">Experience</h2>
              <div className="about-exp-list">
                {experience.map((e) => (
                  <div key={e.role} className="about-exp-card">
                    <div className="about-exp-header">
                      <span className="about-exp-role">{e.role}</span>
                      <span className="about-exp-period">{e.period}</span>
                    </div>
                    <div className="about-exp-company">{e.company}</div>
                    <p className="about-exp-detail">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="about-section">
              <h2 className="about-section-title">Tools & Skills</h2>
              <div className="about-tools">
                {tools.map((t) => (
                  <span key={t} className="about-tool">{t}</span>
                ))}
              </div>
            </div>

            <div className="about-cta">
              <Link className="about-primary" to="/projects">View Projects</Link>
              <Link className="about-secondary" to="/resume">View Resume</Link>
            </div>
          </div>

          {/* ── RIGHT ────────────────────────────────────────── */}
          <div className="about-right">
            <img
              className="about-photo"
              src={aboutImgUrl}
              alt="Ashley Stephens"
            />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
