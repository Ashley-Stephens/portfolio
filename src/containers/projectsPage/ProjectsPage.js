import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projectsPage } from "../../portfolio";
import "./ProjectsPage.scss";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="projects-page">
        <div className="projects-wrap">
          <h1 className="projects-title">{projectsPage.title}</h1>
          <p className="projects-subtitle">{projectsPage.subtitle}</p>

          <div className="projects-grid">
            {projectsPage.projects.map((p) => (
              <Link key={p.slug} className="project-card" to={`/projects/${p.slug}`}>
                <div className="project-name">{p.name}</div>

                <div className="project-problem">{p.oneLineProblem}</div>

                <div className="project-meta">
                  <span className="project-meta-label">Role:</span> {p.role}
                </div>

                <div className="project-meta">
                  <span className="project-meta-label">Methods:</span>{" "}
                  {p.methods.slice(0, 5).join(", ")}
                </div>

                <div className="project-meta">
                  <span className="project-meta-label">Outcome:</span> {p.outcome}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
