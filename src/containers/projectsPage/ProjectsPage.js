import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projectsPage } from "../../portfolio";
import "./ProjectsPage.scss";

function getTitle(p) {
  return p.title || p.name || "Untitled project";
}

function getDesc(p) {
  return (
    p.desc ||
    p.oneLiner ||
    p.oneLineProblem ||
    (p.caseStudy && p.caseStudy.whatItIs) ||
    ""
  );
}

function getThumb(p) {
  // Prefer explicit thumb on the project object
  if (p.thumb) return p.thumb;

  // Safe fallback by slug (so cards still show images even if you forget to add thumb)
  if (p.slug === "mixflow") return "/mixflow.png";
  if (p.slug === "shelfsaver") return "/leftoverchef.png";
  if (p.slug === "leftoverchef") return "/leftoverchef.png";

  return "";
}

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="projects-page">
        <div className="projects-wrap">
          <h1 className="projects-title">{projectsPage.title}</h1>
          <p className="projects-subtitle">{projectsPage.subtitle}</p>

          <div className="projects-grid">
            {projectsPage.projects.map((p) => {
              const title = getTitle(p);
              const desc = getDesc(p);
              const thumb = getThumb(p);

              return (
                <div key={p.slug} className="work-card">
                  <div className="work-thumb">
                    {thumb ? (
                      <img
                        src={process.env.PUBLIC_URL + thumb}
                        alt={`${title} thumbnail`}
                      />
                    ) : (
                      <div className="thumb-placeholder" />
                    )}
                  </div>

                  <div className="work-body">
                    <div className="work-title">{title}</div>
                    <div className="work-desc">{desc}</div>

                    <Link className="work-link" to={`/projects/${p.slug}`}>
                      View case study →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}