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

function splitTitle(name = "") {
  // Supports: "Mixflow — Music playback UX"
  const parts = name.split("—").map((s) => s.trim());
  if (parts.length >= 2) return [parts[0], parts.slice(1).join(" — ")];
  return [name, ""];
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
            <h1 className="csTitle">Project not found</h1>
            <Link className="csPill" to="/projects">
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const cs = project.caseStudy || {};
  const [heroTitle, heroSubtitle] = splitTitle(project.name);

  const heroTagline =
    cs.heroTagline ||
    cs.tagline ||
    cs.whatItIs ||
    project.oneLineProblem ||
    "";

  const platform = cs.platform || project.platform || "Web";

  const prototypeUrl = project.links?.prototype || cs.prototypeUrl || "";
  const heroImage = cs.heroImage || cs.heroMedia || project.heroImage || project.thumb || "";

  const problemBullets = toArray(cs.problemBullets || cs.problem).slice(0, 3);
  const problemQuote =
    cs.problemQuote || "Shuffle doesn’t feel random — it feels biased.";
  const problemImage = cs.problemImage || cs.problemMedia || "";

  // Key Features (preferred: cs.features)
  let features = toArray(cs.features || cs.keyFeatures || cs.coreSolution);

  // If you didn’t define features yet, fall back to decisions → feature cards
  if (!features.length && Array.isArray(cs.decisions)) {
    features = cs.decisions.slice(0, 3).map((d) => ({
      title: d.change || "Feature",
      description: d.why || d.issue || "",
      image: d.image || ""
    }));
  }

  // Key Outcomes (preferred: cs.outcomes)
  let outcomes = toArray(cs.outcomes || cs.keyOutcomes || cs.outcome?.whatChanged);
  outcomes = outcomes
    .map((o) => (typeof o === "string" ? { title: o, description: "" } : o))
    .slice(0, 3);

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Header />

      <main className="csPage">
        <div className="csWrap">
          {/* HERO (text left, laptop image right) */}
          <section className="csHero">
            <div className="csHeroLeft">
              <div className="csHeroHeading">
                <h1 className="csHeroTitle">{heroTitle}</h1>
                {heroSubtitle ? (
                  <div className="csHeroSubtitle">{heroSubtitle}</div>
                ) : null}
              </div>

              {heroTagline ? <p className="csHeroTagline">{heroTagline}</p> : null}

              <div className="csMeta">
                <div className="csMetaRow">
                  <span className="csMetaLabel">Role:</span>
                  <span>{project.role}</span>
                </div>
                {cs.team ? (
                  <div className="csMetaRow">
                    <span className="csMetaLabel">Team:</span>
                    <span>{cs.team}</span>
                  </div>
                ) : null}
                <div className="csMetaRow">
                  <span className="csMetaLabel">Platform:</span>
                  <span>{platform}</span>
                </div>
              </div>

              {prototypeUrl ? (
                <a
                  className="csBtnPrimary"
                  href={prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Prototype
                </a>
              ) : null}
            </div>

            <div className="csHeroRight">
              {heroImage ? (
                <img className="csHeroMock" src={heroImage} alt={`${heroTitle} hero`} />
              ) : (
                <div className="csHeroMockPlaceholder" />
              )}
            </div>
          </section>

          {/* PROBLEM (big card with bullets + quote + image) */}
          <section className="csProblemCard">
            <div className="csProblemLeft">
              <div className="csSectionTitleRow">
                <div className="csSectionIcon">♪</div>
                <h2 className="csSectionTitle">The Problem</h2>
              </div>

              <ul className="csBullets">
                {problemBullets.map((b, i) => (
                  <li key={i}>
                    <span className="csCheck">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="csQuote">
                <span className="csQuoteMark">“</span>
                <span>{problemQuote}</span>
              </div>
            </div>

            <div className="csProblemRight">
              {problemImage ? (
                <img className="csProblemImg" src={problemImage} alt="Problem context" />
              ) : (
                <div className="csProblemImgPlaceholder" />
              )}
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="csSection">
            <h2 className="csH2">Key Features</h2>
            {cs.featuresIntro ? (
              <p className="csSectionSub">{cs.featuresIntro}</p>
            ) : null}

            <div className="csFeatureStack">
              {features.map((f, i) => (
                <div className="csFeatureCard" key={i}>
                  <div className="csFeatureLeft">
                    <h3 className="csH3">{f.title}</h3>
                    {f.description ? <p className="csBody">{f.description}</p> : null}

                    {Array.isArray(f.badges) && f.badges.length ? (
                      <div className="csBadges">
                        {f.badges.map((t) => (
                          <span className="csBadge" key={t}>
                            ✓ {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="csFeatureRight">
                    {f.image ? (
                      <img className="csFeatureImg" src={f.image} alt={f.title} />
                    ) : (
                      <div className="csFeatureImgPlaceholder" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* KEY OUTCOMES */}
          <section className="csSection">
            <h2 className="csH2">Key Outcomes</h2>

            <div className="csOutcomesGrid">
              {outcomes.map((o, i) => (
                <div className="csOutcomeCard" key={i}>
                  <div className="csOutcomeTop">
                    <div className="csOutcomeIcon">{o.icon || "▢"}</div>
                    <div className="csOutcomeTitle">{o.title}</div>
                  </div>
                  {o.description ? (
                    <div className="csOutcomeDesc">{o.description}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM NAV (Prev / All / Next) */}
          <section className="csBottomNav">
            {prev ? (
              <Link className="csPill" to={`/projects/${prev.slug}`}>
                ← Previous Project
              </Link>
            ) : (
              <span className="csPill disabled">← Previous Project</span>
            )}

            <Link className="csPill primary" to="/projects">
              View All Projects
            </Link>

            {next ? (
              <Link className="csPill" to={`/projects/${next.slug}`}>
                Next Project →
              </Link>
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
