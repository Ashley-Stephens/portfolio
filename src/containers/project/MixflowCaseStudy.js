import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MixflowCaseStudy.scss";

function toArray(x) {
  if (!x) return [];
  return Array.isArray(x) ? x : [x];
}

export default function MixflowCaseStudy({ project, prev, next }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxZoomed, setLightboxZoomed] = useState(false);
  const pageRef = useRef(null);

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setLightboxZoomed(false);
  };
  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxZoomed(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("mf-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const els = pageRef.current?.querySelectorAll(".mf-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cs = project.caseStudy || {};
  const heroImage = cs.heroImage || "";
  const heroLogo = cs.heroLogo || "";
  const showcaseImage = cs.showcaseImage || "";
  const prototypeUrl = project.links?.prototype || "";
  const problemBullets = toArray(cs.problemBullets).slice(0, 3);
  const researchData = cs.research || null;
  const processSteps = toArray(cs.process);
  const decisions = toArray(cs.decisions).slice(0, 3);
  const outcomes = toArray(cs.outcomes)
    .map((o) => (typeof o === "string" ? { title: o, description: "" } : o))
    .slice(0, 3);
  const annotatedScreenshots = toArray(cs.annotatedScreenshots);

  let sn = 0;

  return (
    <div className="mf-page" ref={pageRef}>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="mf-hero">
        <div className="mf-hero__glow mf-hero__glow--1" />
        <div className="mf-hero__glow mf-hero__glow--2" />
        <div className="mf-hero__glow mf-hero__glow--3" />

        <div className="mf-hero__inner">
          <div className="mf-hero__content">
            <span className="mf-pill-label">Case Study</span>
            <h1 className="mf-hero__title">{project.name}</h1>
            {project.subtitle && (
              <div className="mf-hero__subtitle">{project.subtitle}</div>
            )}
            {project.heroStatement && (
              <p className="mf-hero__statement">{project.heroStatement}</p>
            )}
            {project.heroSubtext && (
              <p className="mf-hero__subtext">{project.heroSubtext}</p>
            )}

            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="mf-hero__tags">
                {project.tags.map((t) => (
                  <span className="mf-tag" key={t}>{t}</span>
                ))}
              </div>
            )}

            {prototypeUrl && (
              <a
                className="mf-btn"
                href={prototypeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Prototype ↗
              </a>
            )}
          </div>

          {heroImage ? (
            <div className="mf-hero__mockup">
              <img
                className="mf-hero__img"
                src={process.env.PUBLIC_URL + heroImage}
                alt={`${project.name} preview`}
              />
            </div>
          ) : heroLogo ? (
            <div className="mf-hero__mockup mf-hero__mockup--logo">
              <img
                className="mf-hero__logo"
                src={process.env.PUBLIC_URL + heroLogo}
                alt={`${project.name} logo`}
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* ── METADATA ROW ──────────────────────────────────── */}
      <section className="mf-meta mf-reveal">
        {[
          ["Year", project.year],
          ["Role", project.role],
          ["Category", project.category],
          ["Duration", project.duration],
          ["Team", project.team],
          ["Platform", project.platform],
        ]
          .filter(([, v]) => v)
          .map(([label, value]) => (
            <div className="mf-meta__item" key={label}>
              <span className="mf-meta__label">{label}</span>
              <span className="mf-meta__value">{value}</span>
            </div>
          ))}
      </section>

      {/* ══════ DARK CONTENT ══════════════════════════════════ */}
      <div className="mf-wrap">
        {/* ── 01 // THE STORY ─────────────────────────────── */}
        {(cs.overview || problemBullets.length > 0 || cs.problemQuote) && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // The Story</div>

            <div className="mf-story-card">
              {cs.overview && (
                <p className="mf-story__overview">{cs.overview}</p>
              )}

              {cs.problemQuote && (
                <div className="mf-quote-card">
                  <span className="mf-quote-mark">&ldquo;</span>
                  <p className="mf-quote-text">{cs.problemQuote}</p>
                  <span className="mf-quote-mark">&rdquo;</span>
                </div>
              )}

              {problemBullets.length > 0 && (
                <>
                  <div className="mf-insight-banner">Key Problems Identified</div>
                  <div className="mf-problem-list">
                    {problemBullets.map((b, i) => (
                      <div className="mf-problem-item" key={i}>
                        <span className="mf-problem-num">0{i + 1}</span>
                        <span className="mf-problem-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* ── 02 // THE PROCESS ───────────────────────────── */}
        {processSteps.length > 0 && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // The Process</div>
            <h2 className="mf-h2">How I Approached It</h2>

            <div className="mf-timeline">
              {processSteps.map((s, i) => (
                <div className="mf-timeline__step" key={i}>
                  <div className="mf-timeline__marker">
                    <div className="mf-timeline__node" />
                    {i < processSteps.length - 1 && (
                      <div className="mf-timeline__line" />
                    )}
                  </div>
                  <div className="mf-timeline__content">
                    <div className="mf-timeline__num">0{i + 1}</div>
                    <div className="mf-timeline__label">{s.step}</div>
                    <div className="mf-timeline__desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 03 // RESEARCH INSIGHTS ─────────────────────── */}
        {researchData && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // Research Insights</div>
            <h2 className="mf-h2">What I Found</h2>

            {Array.isArray(researchData.methods) &&
              researchData.methods.length > 0 && (
                <div className="mf-methods">
                  {researchData.methods.map((m) => (
                    <span className="mf-method-pill" key={m}>{m}</span>
                  ))}
                </div>
              )}

            {Array.isArray(researchData.insights) &&
              researchData.insights.length > 0 && (
                <div className="mf-insights-grid">
                  {researchData.insights.map((ins, i) => (
                    <div className="mf-insight-card" key={i}>
                      <div className="mf-insight-stat">{ins.stat}</div>
                      <div className="mf-insight-label">{ins.label}</div>
                    </div>
                  ))}
                </div>
              )}

            {researchData.quote && (
              <div className="mf-research-quote">
                <p className="mf-research-quote__text">
                  &ldquo;{researchData.quote.text}&rdquo;
                </p>
                {researchData.quote.author && (
                  <p className="mf-research-quote__author">
                    &mdash; {researchData.quote.author}
                  </p>
                )}
              </div>
            )}
          </section>
        )}

        {/* ── 04 // EARLY DESIGN ──────────────────────────── */}
        {cs.loFiImage && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // Early Design</div>
            <h2 className="mf-h2">Low Fidelity Wireframe</h2>

            <div className="mf-lofi-layout">
              <div className="mf-lofi-callouts mf-lofi-left">
                {(cs.loFiImage.leftCallouts || []).map((c, i) => (
                  <div className="mf-lofi-callout" key={i}>
                    <div className="mf-lofi-callout__num">0{i + 1}</div>
                    <div className="mf-lofi-callout__title">{c.title}</div>
                    <div className="mf-lofi-callout__body">{c.body}</div>
                  </div>
                ))}
              </div>
              <div className="mf-lofi-image-wrap">
                <img
                  className="mf-lofi-img"
                  src={process.env.PUBLIC_URL + cs.loFiImage.image}
                  alt="Low fidelity wireframe"
                  onClick={() =>
                    openLightbox(process.env.PUBLIC_URL + cs.loFiImage.image)
                  }
                />
              </div>
              <div className="mf-lofi-callouts mf-lofi-right">
                {(cs.loFiImage.rightCallouts || []).map((c, i) => (
                  <div className="mf-lofi-callout" key={i}>
                    <div className="mf-lofi-callout__num">
                      0{i + (cs.loFiImage.leftCallouts || []).length + 1}
                    </div>
                    <div className="mf-lofi-callout__title">{c.title}</div>
                    <div className="mf-lofi-callout__body">{c.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FIGMA NOTE ──────────────────────────────────── */}
        {cs.figmaNote && (
          <div className="mf-figma-note mf-reveal">
            <span className="mf-figma-label">Figma</span>
            <p>{cs.figmaNote}</p>
          </div>
        )}
      </div>

      {/* ═════════════════════════════════════════════════════
          SOLUTION — LIGHT SECTION
          ═════════════════════════════════════════════════════ */}
      <section className="mf-solution">
        <div className="mf-solution__wrap">
          <div className="mf-solution__intro mf-reveal">
            <div className="mf-section-num mf-section-num--dark">
              0{++sn} // The Solution
            </div>
            <h2 className="mf-solution__title">
              Introducing <span className="mf-accent">{project.name}.</span>
            </h2>
          </div>

          {/* Shuffle Modes */}
          {cs.shuffleModes && cs.shuffleModes.length > 0 && (
            <div className="mf-shuffle mf-reveal">
              <h3 className="mf-shuffle__heading">Shuffle Modes</h3>
              <p className="mf-shuffle__sub">
                Four modes designed from real listening patterns, each named and
                tied to a specific user need uncovered in research.
              </p>
              <div className="mf-shuffle-grid">
                {cs.shuffleModes.map((mode, i) => (
                  <div className="mf-shuffle-card" key={i}>
                    <img
                      className="mf-shuffle-icon"
                      src={process.env.PUBLIC_URL + mode.icon}
                      alt={mode.name}
                    />
                    <div className="mf-shuffle-name">{mode.name}</div>
                    <div className="mf-shuffle-desc">{mode.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* High Fidelity Showcase */}
          {showcaseImage && (
            <div className="mf-showcase mf-reveal">
              <p className="mf-showcase__eyebrow">High Fidelity Design</p>
              <img
                className="mf-showcase__img"
                src={process.env.PUBLIC_URL + showcaseImage}
                alt={`${project.name} high fidelity design`}
                onClick={() =>
                  openLightbox(process.env.PUBLIC_URL + showcaseImage)
                }
              />
              <p className="mf-img-hint">Click image to expand</p>
            </div>
          )}

          {/* Hi-Fi → Final Product */}
          {cs.hiFiToFinal && (
            <div className="mf-hifi-section mf-reveal">
              <p className="mf-annotated__eyebrow">Design Progression</p>
              <h3 className="mf-annotated__title">
                High Fidelity &rarr; Final Product
              </h3>

              <div className="mf-hifi-compare">
                <div className="mf-hifi-panel">
                  <p className="mf-hifi-label">High Fidelity</p>
                  <img
                    className="mf-hifi-img"
                    src={process.env.PUBLIC_URL + cs.hiFiToFinal.hiFi}
                    alt="High fidelity design"
                    onClick={() =>
                      openLightbox(
                        process.env.PUBLIC_URL + cs.hiFiToFinal.hiFi
                      )
                    }
                  />
                  <p className="mf-img-hint">
                    Click to expand
                  </p>
                </div>
                <div className="mf-hifi-arrow">&rarr;</div>
                <div className="mf-hifi-panel">
                  <p className="mf-hifi-label">Final Product</p>
                  <img
                    className="mf-hifi-img"
                    src={process.env.PUBLIC_URL + cs.hiFiToFinal.final}
                    alt="Final product"
                    onClick={() =>
                      openLightbox(
                        process.env.PUBLIC_URL + cs.hiFiToFinal.final
                      )
                    }
                  />
                  <p className="mf-img-hint">
                    Click to expand
                  </p>
                </div>
              </div>

              {Array.isArray(cs.hiFiToFinal.changes) &&
                cs.hiFiToFinal.changes.length > 0 && (
                  <div className="mf-hifi-changes">
                    {cs.hiFiToFinal.changes.map((c, i) => (
                      <div className="mf-hifi-change" key={i}>
                        <div className="mf-hifi-change__header">
                          <span className="mf-hifi-change__num">0{i + 1}</span>
                          <span className="mf-hifi-change__title">
                            {c.title}
                          </span>
                        </div>
                        <div className="mf-hifi-change__details">
                          <div className="mf-hifi-change__block">
                            <span className="mf-hifi-change__label">
                              What changed
                            </span>
                            <p>{c.what}</p>
                          </div>
                          <div className="mf-hifi-change__block mf-hifi-change__block--why">
                            <span className="mf-hifi-change__label">Why</span>
                            <p>{c.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* Annotated Screenshots */}
          {annotatedScreenshots.map((s, sIdx) => (
            <div className="mf-annotated mf-reveal" key={`ann-${sIdx}`}>
              <p className="mf-annotated__eyebrow">
                {s.eyebrow || "Final Product"}
              </p>
              <h3 className="mf-annotated__title">{s.title}</h3>

              {s.layout === "vertical" ? (
                <div className="mf-annotated-vertical">
                  {(s.topCallouts || []).length > 0 && (
                    <div className="mf-annotated-row">
                      {s.topCallouts.map((c, i) => (
                        <div className="mf-annotated-callout" key={i}>
                          <div className="mf-annotated-callout__title">
                            {c.title}
                          </div>
                          <div className="mf-annotated-callout__body">
                            {c.body}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mf-annotated-img-wrap">
                    <img
                      className="mf-annotated-img"
                      src={process.env.PUBLIC_URL + s.image}
                      alt={s.title}
                      onClick={() =>
                        openLightbox(process.env.PUBLIC_URL + s.image)
                      }
                    />
                  </div>
                  {(s.bottomCallouts || []).length > 0 && (
                    <div className="mf-annotated-row">
                      {s.bottomCallouts.map((c, i) => (
                        <div className="mf-annotated-callout" key={i}>
                          <div className="mf-annotated-callout__title">
                            {c.title}
                          </div>
                          <div className="mf-annotated-callout__body">
                            {c.body}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="mf-annotated-horiz">
                  <div className="mf-annotated-callouts-col">
                    {(s.leftCallouts || []).map((c, i) => (
                      <div className="mf-annotated-callout" key={i}>
                        <div className="mf-annotated-callout__title">
                          {c.title}
                        </div>
                        <div className="mf-annotated-callout__body">
                          {c.body}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mf-annotated-img-wrap">
                    <img
                      className="mf-annotated-img"
                      src={process.env.PUBLIC_URL + s.image}
                      alt={s.title}
                      onClick={() =>
                        openLightbox(process.env.PUBLIC_URL + s.image)
                      }
                    />
                  </div>
                  <div className="mf-annotated-callouts-col">
                    {(s.rightCallouts || []).map((c, i) => (
                      <div className="mf-annotated-callout" key={i}>
                        <div className="mf-annotated-callout__title">
                          {c.title}
                        </div>
                        <div className="mf-annotated-callout__body">
                          {c.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          BACK TO DARK
          ═════════════════════════════════════════════════════ */}
      <div className="mf-wrap">
        {/* ── DESIGN DECISIONS ────────────────────────────── */}
        {decisions.length > 0 && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // Key Decisions</div>
            <h2 className="mf-h2">Design Decisions</h2>

            <div className="mf-decision-stack">
              {decisions.map((d, i) => (
                <div className="mf-decision-row" key={i}>
                  <div className="mf-decision-header">
                    <span className="mf-decision-number">0{i + 1}</span>
                    <h3 className="mf-decision-title">{d.title}</h3>
                  </div>
                  <div className="mf-decision-details">
                    {d.problem && (
                      <div className="mf-decision-detail mf-decision--problem">
                        <span className="mf-decision-detail__label">Problem</span>
                        <p>{d.problem}</p>
                      </div>
                    )}
                    {d.solution && (
                      <div className="mf-decision-detail mf-decision--solution">
                        <span className="mf-decision-detail__label">Solution</span>
                        <p>{d.solution}</p>
                      </div>
                    )}
                    {d.rationale && (
                      <div className="mf-decision-detail mf-decision--rationale">
                        <span className="mf-decision-detail__label">Why</span>
                        <p>{d.rationale}</p>
                      </div>
                    )}
                    {d.impact && (
                      <div className="mf-decision-detail mf-decision--impact">
                        <span className="mf-decision-detail__label">Impact</span>
                        <p>{d.impact}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── KEY OUTCOMES ────────────────────────────────── */}
        {outcomes.length > 0 && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // Results</div>
            <h2 className="mf-h2">Key Outcomes</h2>

            <div className="mf-outcomes-grid">
              {outcomes.map((o, i) => (
                <div className="mf-outcome-card" key={i}>
                  <div className="mf-outcome-title">{o.title}</div>
                  {o.description && (
                    <div className="mf-outcome-desc">{o.description}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── REFLECTION ──────────────────────────────────── */}
        {cs.reflection && (
          <section className="mf-section mf-reveal">
            <div className="mf-section-num">0{++sn} // Reflection</div>
            <h2 className="mf-h2">Reflection &amp; Growth</h2>
            <blockquote className="mf-reflection-text">
              {cs.reflection}
            </blockquote>
          </section>
        )}

        {/* ── BOTTOM NAV ──────────────────────────────────── */}
        <section className="mf-bottom-nav">
          {prev ? (
            <Link className="mf-nav-pill" to={`/projects/${prev.slug}`}>
              &larr; Previous Project
            </Link>
          ) : (
            <span className="mf-nav-pill mf-nav-pill--disabled">
              &larr; Previous Project
            </span>
          )}
          <Link className="mf-nav-pill mf-nav-pill--primary" to="/projects">
            View All Projects
          </Link>
          {next ? (
            <Link className="mf-nav-pill" to={`/projects/${next.slug}`}>
              Next Project &rarr;
            </Link>
          ) : (
            <span className="mf-nav-pill mf-nav-pill--disabled">
              Next Project &rarr;
            </span>
          )}
        </section>
      </div>

      {/* ── LIGHTBOX ──────────────────────────────────────── */}
      {lightboxSrc && (
        <div
          className={`mf-lightbox${lightboxZoomed ? " mf-lightbox--zoomed" : ""}`}
          onClick={closeLightbox}
        >
          <button className="mf-lightbox__back" onClick={closeLightbox}>
            &larr; Back
          </button>
          <img
            className={`mf-lightbox__img${lightboxZoomed ? " mf-lightbox__img--zoomed" : ""}`}
            src={lightboxSrc}
            alt="Full size preview"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxZoomed(!lightboxZoomed);
            }}
          />
          <p className="mf-lightbox__hint">
            {lightboxZoomed
              ? "Click image to zoom out · Click outside to close"
              : "Click image to zoom in · Click outside to close"}
          </p>
        </div>
      )}
    </div>
  );
}
