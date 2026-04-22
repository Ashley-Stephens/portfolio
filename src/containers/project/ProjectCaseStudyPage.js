import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projectsPage } from "../../portfolio";
import "./ProjectCaseStudyPage.scss";

function toArray(x) {
  if (!x) return [];
  return Array.isArray(x) ? x : [x];
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const projects = projectsPage?.projects || [];
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = idx >= 0 ? projects[idx] : null;

  if (!project) {
    return (
      <>
        <Header />
        <main className="csPage">
          <div className="csWrap">
            <h1>Project not found</h1>
            <Link className="csPill" to="/projects">← Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const cs = project.caseStudy || {};
  const heroImage = cs.heroImage || "";
  const showcaseImage = cs.showcaseImage || "";
  const prototypeUrl = project.links?.prototype || "";

  const problemBullets = toArray(cs.problemBullets).slice(0, 3);
  const researchData = cs.research || null;
  const processSteps = toArray(cs.process);
  const decisions = toArray(cs.decisions).slice(0, 3);
  const outcomes = toArray(cs.outcomes)
    .map((o) => (typeof o === "string" ? { title: o, description: "" } : o))
    .slice(0, 3);

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Header />

      <main className="csPage">
        <div className="csWrap">

          {/* ── HERO ─────────────────────────────────────────── */}
          <section className={`csHero ${!heroImage ? "csHeroNoImage" : ""}`}>
            <div className="csHeroLeft">
              <p className="csEyebrow">{project.category || "UX Design"} · {project.year || ""}</p>

              <h1 className="csHeroTitle">{project.name}</h1>
              {project.subtitle && (
                <div className="csHeroSubtitle">{project.subtitle}</div>
              )}

              {(project.heroStatement || project.heroSubtext) && (
                <div className="csHeroStatement">
                  {project.heroStatement && <p className="csHeroQ">{project.heroStatement}</p>}
                  {project.heroSubtext && <p className="csHeroA">{project.heroSubtext}</p>}
                </div>
              )}

              <div className="csMeta">
                {project.role && (
                  <div className="csMetaRow">
                    <span className="csMetaLabel">Role</span>
                    <span>{project.role}</span>
                  </div>
                )}
                {project.team && (
                  <div className="csMetaRow">
                    <span className="csMetaLabel">Team</span>
                    <span>{project.team}</span>
                  </div>
                )}
                {project.platform && (
                  <div className="csMetaRow">
                    <span className="csMetaLabel">Platform</span>
                    <span>{project.platform}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="csMetaRow">
                    <span className="csMetaLabel">Timeline</span>
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>

              {Array.isArray(project.tags) && project.tags.length > 0 && (
                <div className="csHeroTags">
                  {project.tags.map((t) => (
                    <span className="csHeroTag" key={t}>{t}</span>
                  ))}
                </div>
              )}

              {prototypeUrl && (
                <a className="csBtnPrimary" href={prototypeUrl} target="_blank" rel="noreferrer">
                  View Prototype ↗
                </a>
              )}
            </div>

            {heroImage && (
              <div className="csHeroRight">
                <img
                  className="csHeroMock"
                  src={process.env.PUBLIC_URL + heroImage}
                  alt={`${project.name} preview`}
                />
              </div>
            )}
          </section>

          {/* ── OVERVIEW ─────────────────────────────────────── */}
          {cs.overview && (
            <section className="csOverview">
              <p className="csOverviewText">{cs.overview}</p>
            </section>
          )}

          {/* ── THE PROBLEM ──────────────────────────────────── */}
          {(problemBullets.length > 0 || cs.problemQuote) && (
            <section className="csProblemCard">
              <div className="csSectionTitleRow">
                <div className="csSectionIcon">{cs.problemSectionIcon || "!"}</div>
                <h2 className="csSectionTitle">The Problem</h2>
              </div>

              {problemBullets.length > 0 && (
                <ul className="csBullets">
                  {problemBullets.map((b, i) => (
                    <li key={i}>
                      <span className="csCheck">✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {cs.problemQuote && (
                <div className="csQuote">
                  <span className="csQuoteMark">"</span>
                  <span>{cs.problemQuote}</span>
                  <span className="csQuoteMark">"</span>
                </div>
              )}
            </section>
          )}

          {/* ── DESIGN PROCESS ───────────────────────────────── */}
          {processSteps.length > 0 && (
            <section className="csSection">
              <p className="csEyebrowSection">How I Approached It</p>
              <h2 className="csH2">Design Process</h2>
              <div className="csProcessSteps">
                {processSteps.map((s, i) => (
                  <div className="csProcessStep" key={i}>
                    <div className="csProcessNum">0{i + 1}</div>
                    <div className="csProcessLabel">{s.step}</div>
                    <div className="csProcessDesc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── HIGH FIDELITY SHOWCASE ───────────────────────── */}
          {showcaseImage && (
            <section className="csShowcase">
              <p className="csEyebrowSection">High Fidelity Design</p>
              <img
                className="csShowcaseImg"
                src={process.env.PUBLIC_URL + showcaseImage}
                alt={`${project.name} high fidelity design`}
              />
            </section>
          )}

          {/* ── FIGMA NOTE ───────────────────────────────────── */}
          {cs.figmaNote && (
            <div className="csFigmaNote">
              <span className="csFigmaLabel">Figma</span>
              <p>{cs.figmaNote}</p>
            </div>
          )}

          {/* ── RESEARCH INSIGHTS ────────────────────────────── */}
          {researchData && (
            <section className="csSection csResearchSection">
              <p className="csEyebrowSection">What I Found</p>
              <h2 className="csH2">Research Insights</h2>

              {Array.isArray(researchData.methods) && researchData.methods.length > 0 && (
                <div className="csResearchMethods">
                  <span className="csResearchMethodsLabel">Methods:</span>
                  {researchData.methods.map((m) => (
                    <span className="csResearchMethod" key={m}>{m}</span>
                  ))}
                </div>
              )}

              {Array.isArray(researchData.insights) && researchData.insights.length > 0 && (
                <div className="csInsightsGrid">
                  {researchData.insights.map((ins, i) => (
                    <div className="csInsightCard" key={i}>
                      <div className="csInsightStat">{ins.stat}</div>
                      <div className="csInsightLabel">{ins.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {researchData.quote && (
                <div className="csResearchQuote">
                  <div className="csResearchQuoteText">"{researchData.quote.text}"</div>
                  {researchData.quote.author && (
                    <div className="csResearchQuoteAuthor">— {researchData.quote.author}</div>
                  )}
                </div>
              )}
            </section>
          )}

          {/* ── DESIGN DECISIONS ─────────────────────────────── */}
          {decisions.length > 0 && (
            <section className="csSection">
              <p className="csEyebrowSection">Key Decisions</p>
              <h2 className="csH2">Design Decisions</h2>

              <div className="csDecisionStack">
                {decisions.map((d, i) => (
                  <div className="csDecisionCard" key={i}>
                    <div className="csDecisionNumber">Decision {i + 1}</div>
                    <h3 className="csDecisionTitle">{d.title}</h3>

                    <div className="csDecisionGrid">
                      {d.problem && (
                        <div className="csDecisionBlock csDecisionProblem">
                          <div className="csDecisionBlockLabel">Problem</div>
                          <p>{d.problem}</p>
                        </div>
                      )}
                      {d.solution && (
                        <div className="csDecisionBlock csDecisionSolution">
                          <div className="csDecisionBlockLabel">Solution</div>
                          <p>{d.solution}</p>
                        </div>
                      )}
                      {d.rationale && (
                        <div className="csDecisionBlock csDecisionRationale">
                          <div className="csDecisionBlockLabel">Why</div>
                          <p>{d.rationale}</p>
                        </div>
                      )}
                      {d.impact && (
                        <div className="csDecisionBlock csDecisionImpact">
                          <div className="csDecisionBlockLabel">Impact</div>
                          <p>{d.impact}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── KEY OUTCOMES ─────────────────────────────────── */}
          {outcomes.length > 0 && (
            <section className="csSection">
              <p className="csEyebrowSection">Results</p>
              <h2 className="csH2">Key Outcomes</h2>

              <div className="csOutcomesGrid">
                {outcomes.map((o, i) => (
                  <div className="csOutcomeCard" key={i}>
                    <div className="csOutcomeTitle">{o.title}</div>
                    {o.description && <div className="csOutcomeDesc">{o.description}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── REFLECTION ───────────────────────────────────── */}
          {cs.reflection && (
            <section className="csReflection">
              <p className="csEyebrowSection">Takeaway</p>
              <blockquote className="csReflectionText">{cs.reflection}</blockquote>
            </section>
          )}

          {/* ── BOTTOM NAV ───────────────────────────────────── */}
          <section className="csBottomNav">
            {prev ? (
              <Link className="csPill" to={`/projects/${prev.slug}`}>← Previous Project</Link>
            ) : (
              <span className="csPill disabled">← Previous Project</span>
            )}
            <Link className="csPill primary" to="/projects">View All Projects</Link>
            {next ? (
              <Link className="csPill" to={`/projects/${next.slug}`}>Next Project →</Link>
            ) : (
              <span className="csPill disabled">Next Project →</span>
            )}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
