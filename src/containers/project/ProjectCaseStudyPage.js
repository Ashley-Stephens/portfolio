import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projectsPage } from "../../portfolio";
import "./ProjectCaseStudyPage.scss";

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = projectsPage.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="case-page">
          <div className="case-wrap">
            <h1 className="case-title">Project not found</h1>
            <Link className="case-back" to="/projects">← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const cs = project.caseStudy;
  const next = projectsPage.projects.find((p) => p.slug === project.nextSlug);

  const ctas = [
    { label: "Prototype", url: project.links.prototype },
    { label: "GitHub", url: project.links.github },
    { label: "Live Demo", url: project.links.live }
  ].filter((x) => !!x.url);

  return (
    <>
      <Header />

      <main className="case-page">
        <div className="case-wrap">
          {/* Escape route #1 */}
          <Link className="case-back" to="/projects">← Back to Projects</Link>

          {/* HERO */}
          <section className="case-hero">
            <h1 className="case-title">{project.name}</h1>
            <p className="case-what">{cs.whatItIs}</p>

            <div className="case-meta">
              <div><span className="case-meta-label">Role:</span> {project.role}</div>
              {cs.team && <div><span className="case-meta-label">Team:</span> {cs.team}</div>}
              {cs.timeline && <div><span className="case-meta-label">Timeline:</span> {cs.timeline}</div>}
            </div>

            <div className="case-tags">
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="case-tag">{t}</span>
              ))}
            </div>

            {ctas.length > 0 && (
              <div className="case-cta">
                {ctas.map((b) => (
                  <a
                    key={b.label}
                    className="case-button"
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {b.label}
                  </a>
                ))}
              </div>
            )}
          </section>

          {/* Problem */}
          <section className="case-section">
            <h2 className="case-h2">Problem</h2>
            {cs.problem.map((p, i) => (
              <p key={i} className="case-p">{p}</p>
            ))}
          </section>

          {/* Role & constraints */}
          <section className="case-section">
            <h2 className="case-h2">Your role & constraints</h2>

            <div className="case-two-col">
              <div className="case-col">
                <h3 className="case-h3">What I owned</h3>
                <ul className="case-list">
                  {cs.owned.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>

              <div className="case-col">
                <h3 className="case-h3">Constraints</h3>
                <ul className="case-list">
                  {cs.constraints.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="case-section">
            <h2 className="case-h2">Process</h2>

            <div className="case-process">
              <div className="case-col">
                <h3 className="case-h3">Research</h3>
                <ul className="case-list">{cs.process.research.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>

              <div className="case-col">
                <h3 className="case-h3">Synthesis</h3>
                <ul className="case-list">{cs.process.synthesis.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>

              <div className="case-col">
                <h3 className="case-h3">Design decisions</h3>
                <ul className="case-list">{cs.process.design.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>

              <div className="case-col">
                <h3 className="case-h3">Iteration</h3>
                <ul className="case-list">{cs.process.iteration.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          {/* Key decisions */}
          <section className="case-section">
            <h2 className="case-h2">Key decisions</h2>

            <div className="decisions-grid">
              {cs.decisions.slice(0, 5).map((d, idx) => (
                <div key={idx} className="decision-card">
                  <div className="decision-row">
                    <div className="decision-label">Issue</div>
                    <div>{d.issue}</div>
                  </div>
                  <div className="decision-row">
                    <div className="decision-label">Change</div>
                    <div>{d.change}</div>
                  </div>
                  <div className="decision-row">
                    <div className="decision-label">Why</div>
                    <div>{d.why}</div>
                  </div>
                  <div className="decision-row">
                    <div className="decision-label">Result</div>
                    <div>{d.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="case-section">
            <h2 className="case-h2">Outcome</h2>

            {cs.outcome.metrics.length > 0 && (
              <>
                <h3 className="case-h3">What improved</h3>
                <ul className="case-list">
                  {cs.outcome.metrics.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </>
            )}

            <h3 className="case-h3">{cs.outcome.metrics.length > 0 ? "What changed" : "What changed / validated"}</h3>
            <ul className="case-list">
              {cs.outcome.whatChanged.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </section>

          {/* Reflection */}
          <section className="case-section">
            <h2 className="case-h2">Reflection</h2>
            <ul className="case-list">
              {cs.reflection.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </section>

          {/* Escape routes #2 and #3 */}
          <div className="case-bottom-nav">
            <Link className="case-nav-link" to="/projects">Back to Projects</Link>
            {next && (
              <Link className="case-nav-link primary" to={`/projects/${next.slug}`}>
                Next project →
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
