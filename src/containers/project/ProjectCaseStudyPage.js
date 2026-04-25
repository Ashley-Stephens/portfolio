import React, { useState } from "react";
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
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxZoomed, setLightboxZoomed] = useState(false);

  const openLightbox = (src) => { setLightboxSrc(src); setLightboxZoomed(false); };
  const closeLightbox = () => { setLightboxSrc(null); setLightboxZoomed(false); };
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
  const heroLogo  = cs.heroLogo  || "";
  const showcaseImage = cs.showcaseImage || "";
  const prototypeUrl = project.links?.prototype || "";
  const appScreenshots = toArray(cs.appScreenshots);
  const annotatedScreenshots = toArray(cs.annotatedScreenshots);

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
          <section className={`csHero ${!heroImage && !heroLogo ? "csHeroNoImage" : ""}`}>
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

            {heroImage ? (
              <div className="csHeroRight">
                <img
                  className="csHeroMock"
                  src={process.env.PUBLIC_URL + heroImage}
                  alt={`${project.name} preview`}
                />
              </div>
            ) : heroLogo ? (
              <div className="csHeroRight csHeroRightLogo">
                <img
                  className="csHeroLogoDisplay"
                  src={process.env.PUBLIC_URL + heroLogo}
                  alt={`${project.name} logo`}
                />
              </div>
            ) : null}
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
              <h2 className="csProblemTitle">The Problem</h2>

              {problemBullets.length > 0 && (
                <ol className="csProblemList">
                  {problemBullets.map((b, i) => (
                    <li key={i} className="csProblemItem">
                      <span className="csProblemNum">0{i + 1}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ol>
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

          {/* ── LOW FIDELITY WIREFRAME ───────────────────────── */}
          {cs.loFiImage && (
            <section className="csSection">
              <p className="csEyebrowSection">Early Design</p>
              <h2 className="csH2">Low Fidelity Wireframe</h2>
              <div className="csLoFiLayout">
                <div className="csLoFiCallouts csLoFiLeft">
                  {(cs.loFiImage.leftCallouts || []).map((c, i) => (
                    <div className="csLoFiCallout" key={i}>
                      <div className="csLoFiCalloutNum">0{i + 1}</div>
                      <div className="csLoFiCalloutTitle">{c.title}</div>
                      <div className="csLoFiCalloutBody">{c.body}</div>
                    </div>
                  ))}
                </div>
                <div className="csLoFiImageWrap">
                  <img
                    className="csLoFiImg csAnnotatedImgClickable"
                    src={process.env.PUBLIC_URL + cs.loFiImage.image}
                    alt="Low fidelity wireframe"
                    onClick={() => openLightbox(process.env.PUBLIC_URL + cs.loFiImage.image)}
                  />
                </div>
                <div className="csLoFiCallouts csLoFiRight">
                  {(cs.loFiImage.rightCallouts || []).map((c, i) => (
                    <div className="csLoFiCallout" key={i}>
                      <div className="csLoFiCalloutNum">0{i + (cs.loFiImage.leftCallouts || []).length + 1}</div>
                      <div className="csLoFiCalloutTitle">{c.title}</div>
                      <div className="csLoFiCalloutBody">{c.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── SHUFFLE MODES ────────────────────────────────── */}
          {cs.shuffleModes && cs.shuffleModes.length > 0 && (
            <section className="csSection">
              <p className="csEyebrowSection">The Solution</p>
              <h2 className="csH2">Shuffle Modes</h2>
              <p className="csSectionSub">Four modes designed from real listening patterns, each named and tied to a specific user need uncovered in research.</p>
              <div className="csShuffleGrid">
                {cs.shuffleModes.map((mode, i) => (
                  <div className="csShuffleCard" key={i}>
                    <img
                      className="csShuffleIcon"
                      src={process.env.PUBLIC_URL + mode.icon}
                      alt={mode.name}
                    />
                    <div className="csShuffleName">{mode.name}</div>
                    <div className="csShuffleDesc">{mode.desc}</div>
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
                className="csShowcaseImg csAnnotatedImgClickable"
                src={process.env.PUBLIC_URL + showcaseImage}
                alt={`${project.name} high fidelity design`}
                onClick={() => openLightbox(process.env.PUBLIC_URL + showcaseImage)}
              />
              <p className="csImgHint">Click image to expand</p>
            </section>
          )}

          {/* ── HI-FI → FINAL PRODUCT SHOWCASE ──────────────── */}
          {cs.hiFiToFinal && (
            <section className="csSection">
              <p className="csEyebrowSection">Design Progression</p>
              <h2 className="csH2">High Fidelity → Final Product</h2>
              <div className="csHiFiToFinal">
                <div className="csHiFiPanel">
                  <p className="csHiFiLabel">High Fidelity</p>
                  <img
                    className="csHiFiImg csAnnotatedImgClickable"
                    src={process.env.PUBLIC_URL + cs.hiFiToFinal.hiFi}
                    alt="High fidelity design"
                    onClick={() => openLightbox(process.env.PUBLIC_URL + cs.hiFiToFinal.hiFi)}
                  />
                  <p className="csImgHint">Click to expand · Click again to zoom</p>
                </div>
                <div className="csHiFiArrow">→</div>
                <div className="csHiFiPanel">
                  <p className="csHiFiLabel">Final Product</p>
                  <img
                    className="csHiFiImg csAnnotatedImgClickable"
                    src={process.env.PUBLIC_URL + cs.hiFiToFinal.final}
                    alt="Final product"
                    onClick={() => openLightbox(process.env.PUBLIC_URL + cs.hiFiToFinal.final)}
                  />
                  <p className="csImgHint">Click to expand · Click again to zoom</p>
                </div>
              </div>

              {Array.isArray(cs.hiFiToFinal.changes) && cs.hiFiToFinal.changes.length > 0 && (
                <div className="csHiFiChanges">
                  {cs.hiFiToFinal.changes.map((c, i) => (
                    <div className="csHiFiChangeCard" key={i}>
                      <div className="csHiFiChangeNum">0{i + 1}</div>
                      <div className="csHiFiChangeTitle">{c.title}</div>
                      <div className="csHiFiChangeWhat"><span className="csHiFiChangeLabel">What changed</span>{c.what}</div>
                      <div className="csHiFiChangeWhy"><span className="csHiFiChangeLabel">Why</span>{c.why}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* ── FIGMA NOTE ───────────────────────────────────── */}
          {cs.figmaNote && (
            <div className="csFigmaNote">
              <span className="csFigmaLabel">Figma</span>
              <p>{cs.figmaNote}</p>
            </div>
          )}

          {/* ── ANNOTATED SCREENSHOTS ────────────────────────── */}
          {annotatedScreenshots.length > 0 && annotatedScreenshots.map((s, idx) => (
            <section className="csSection" key={`ann-${idx}`}>
              <p className="csEyebrowSection">{s.eyebrow || "Final Product"}</p>
              <h2 className="csH2">{s.title}</h2>

              {s.layout === "vertical" ? (
                <div className="csAnnotatedVertical">
                  {(s.topCallouts || []).length > 0 && (
                    <div className="csAnnotatedRow csAnnotatedTop">
                      {(s.topCallouts || []).map((c, i) => (
                        <div className="csAnnotatedCallout csAnnotatedCalloutH" key={i}>
                          <div className="csAnnotatedCalloutTitle">{c.title}</div>
                          <div className="csAnnotatedCalloutBody">{c.body}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="csAnnotatedImageWrap csAnnotatedImageFull">
                    <img
                      className="csAnnotatedImg csAnnotatedImgClickable"
                      src={process.env.PUBLIC_URL + s.image}
                      alt={s.title}
                      onClick={() => openLightbox(process.env.PUBLIC_URL + s.image)}
                    />
                  </div>
                  {(s.bottomCallouts || []).length > 0 && (
                    <div className="csAnnotatedRow csAnnotatedBottom">
                      {(s.bottomCallouts || []).map((c, i) => (
                        <div className="csAnnotatedCallout csAnnotatedCalloutH" key={i}>
                          <div className="csAnnotatedCalloutTitle">{c.title}</div>
                          <div className="csAnnotatedCalloutBody">{c.body}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="csAnnotatedLayout">
                  <div className="csAnnotatedCallouts csAnnotatedLeft">
                    {(s.leftCallouts || []).map((c, i) => (
                      <div className="csAnnotatedCallout" key={i}>
                        <div className="csAnnotatedCalloutTitle">{c.title}</div>
                        <div className="csAnnotatedCalloutBody">{c.body}</div>
                      </div>
                    ))}
                  </div>
                  <div className="csAnnotatedImageWrap">
                    <img
                      className="csAnnotatedImg csAnnotatedImgClickable"
                      src={process.env.PUBLIC_URL + s.image}
                      alt={s.title}
                      onClick={() => openLightbox(process.env.PUBLIC_URL + s.image)}
                    />
                  </div>
                  <div className="csAnnotatedCallouts csAnnotatedRight">
                    {(s.rightCallouts || []).map((c, i) => (
                      <div className="csAnnotatedCallout" key={i}>
                        <div className="csAnnotatedCalloutTitle">{c.title}</div>
                        <div className="csAnnotatedCalloutBody">{c.body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* ── APP SCREENSHOTS (used when no annotated version) ── */}
          {annotatedScreenshots.length === 0 && appScreenshots.length > 0 && (
            <section className="csSection">
              <p className="csEyebrowSection">The App</p>
              <h2 className="csH2">Working Prototype</h2>
              <div className="csAppScreensGrid">
                {appScreenshots.map((s, i) => (
                  <div className="csAppScreenCard" key={i}>
                    <img
                      className="csAppScreenImg"
                      src={process.env.PUBLIC_URL + s.image}
                      alt={s.caption || `App screen ${i + 1}`}
                    />
                    {s.caption && <p className="csAppScreenCaption">{s.caption}</p>}
                  </div>
                ))}
              </div>
            </section>
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

      {lightboxSrc && (
        <div
          className={`csLightboxOverlay${lightboxZoomed ? " csLightboxOverlayZoomed" : ""}`}
          onClick={closeLightbox}
        >
          <button className="csLightboxBack" onClick={closeLightbox}>← Back</button>
          <img
            className={`csLightboxImg${lightboxZoomed ? " csLightboxImgZoomed" : ""}`}
            src={lightboxSrc}
            alt="Full size preview"
            onClick={(e) => { e.stopPropagation(); setLightboxZoomed(!lightboxZoomed); }}
          />
          <p className="csLightboxHint">
            {lightboxZoomed ? "Click image to zoom out · Click outside to close" : "Click image to zoom in · Click outside to close"}
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}
