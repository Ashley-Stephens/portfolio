import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projectsPage } from "../../portfolio";
import "./ProjectsPage.scss";

const PROCESS_STEPS = ["Discover", "Define", "Design", "Deliver"];

function getThumb(p) {
  if (p.thumb) return p.thumb;
  if (p.slug === "mixflow") return "/Mixflow.png";
  if (p.slug === "shelfsaver") return "/LeftoverChef.png";
  if (p.slug === "leftoverchef") return "/LeftoverChef.png";
  return "";
}

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="projects-page">
        <div className="projects-wrap">
          <div className="projects-header">
            <p className="projects-eyebrow">Case Studies</p>
            <h1 className="projects-title">{projectsPage.title}</h1>
            <p className="projects-subtitle">{projectsPage.subtitle}</p>
          </div>

          <div className="projects-list">
            {projectsPage.projects.map((p, idx) => {
              const thumb = getThumb(p);
              const isEven = idx % 2 === 0;

              return (
                <article
                  key={p.slug}
                  className={`project-card ${isEven ? "card-img-left" : "card-img-right"}`}
                >
                  {/* Thumbnail */}
                  <div className="project-card__media">
                    <Link to={`/projects/${p.slug}`} tabIndex={-1} aria-hidden>
                      {thumb ? (
                        <img
                          src={process.env.PUBLIC_URL + thumb}
                          alt={`${p.name} preview`}
                          className="project-card__img"
                        />
                      ) : (
                        <div className="project-card__img-placeholder" />
                      )}
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span className="project-card__category">{p.category || "UX Design"}</span>
                      {p.year && <span className="project-card__year">{p.year}</span>}
                    </div>

                    <h2 className="project-card__name">
                      {p.name}
                      {p.subtitle && (
                        <span className="project-card__name-sub"> — {p.subtitle}</span>
                      )}
                    </h2>

                    <p className="project-card__statement">
                      {p.heroStatement ||
                        p.oneLineProblem ||
                        (p.caseStudy && p.caseStudy.overview) ||
                        ""}
                    </p>

                    {/* Role + duration */}
                    <div className="project-card__details">
                      {p.role && (
                        <div className="project-card__detail-row">
                          <span className="project-card__detail-label">Role</span>
                          <span>{p.role}</span>
                        </div>
                      )}
                      {p.duration && (
                        <div className="project-card__detail-row">
                          <span className="project-card__detail-label">Timeline</span>
                          <span>{p.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {Array.isArray(p.tags) && p.tags.length > 0 && (
                      <div className="project-card__tags">
                        {p.tags.map((t) => (
                          <span key={t} className="project-card__tag">{t}</span>
                        ))}
                      </div>
                    )}

                    {/* Process steps */}
                    <div className="project-card__process">
                      {PROCESS_STEPS.map((s, i) => (
                        <React.Fragment key={s}>
                          <span className="project-card__process-step">{s}</span>
                          {i < PROCESS_STEPS.length - 1 && (
                            <span className="project-card__process-arrow">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <Link className="project-card__cta" to={`/projects/${p.slug}`}>
                      View Case Study →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
