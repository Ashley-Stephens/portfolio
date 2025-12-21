import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting } from "../../portfolio";
import "./AboutPage.scss";

export default function AboutPage() {
  const aboutImgUrl = process.env.PUBLIC_URL + "/about_picture.jpg"; // put this in /public

  const expertise = [
    "UX research + usability testing",
    "User interviews & surveys",
    "Information architecture",
    "Wireframing + prototyping",
    "Heuristic evaluation",
    "Designing dashboards & workflows",
    "Front-end implementation (React)",
    "Clear systems + clean UI patterns"
  ];

  return (
    <>
      <Header />

      <main className="about-page">
        <div className="about-card">
          <div className="about-left">
            <h1 className="about-title">About</h1>

            <p className="about-body">
              Hi, I’m {greeting.username}. I’m a UX-focused CS student who likes turning
              messy requirements into clear, usable interfaces. My work blends research
              and hands-on building—interviews, usability tests, wireframes/prototypes,
              and shipping real UI in React. I’m especially interested in tools that
              support creators and time-poor users, so I care a lot about workflow,
              hierarchy, and “get to the point” design.
            </p>

            <div className="about-section">
              <h2 className="about-section-title">Areas of expertise</h2>
              <ul className="about-list">
                {expertise.map((item) => (
                  <li key={item} className="about-item">{item}</li>
                ))}
              </ul>
            </div>

            <div className="about-cta">
              <Link className="about-primary" to="/#projects">View projects</Link>
              <Link className="about-secondary" to="/resume">View resume</Link>
            </div>
          </div>

          <div className="about-right">
            <img
              className="about-photo"
              src={aboutImgUrl}
              alt={`${greeting.username} about`}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
