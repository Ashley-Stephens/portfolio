import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import DuoScene from "../../components/duoScene/DuoScene";
import "./VioletCraftworksCaseStudy.scss";

const PHONE_SLIDES = [
  process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks.com_(iPhone 14 Pro Max) (1).png",
  process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks.com_(iPhone 14 Pro Max) (2).png",
  process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks.com_(iPhone 14 Pro Max) (3).png",
];

function toArray(x) {
  if (!x) return [];
  return Array.isArray(x) ? x : [x];
}

export default function VioletCraftworksCaseStudy({ project, prev, next }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const etsyPainPoints = [
    {
      title: "Thin brand story",
      body: "The storefront looks like a listing hub, not a full shop with its own personality and trust-building context.",
      className: "vc-etsy-annot--story",
    },
    {
      title: "Product info gets compressed",
      body: "Buyers have to work harder to understand difficulty, supplies, and what the finished pattern is actually for.",
      className: "vc-etsy-annot--info",
    },
    {
      title: "Discovery is boxed in",
      body: "Navigation, filtering, SEO, and beginner guidance all depend on Etsy's structure instead of the shop's actual user needs.",
      className: "vc-etsy-annot--discovery",
    },
  ];
  const strategyPaths = {
    shop: {
      icon: "/VioletCraftworks/shopping-bag-svgrepo-com.svg",
      alt: "Shopping bag icon",
      title: "I know what I want",
      sub: "(Shop)",
      items: [
        { icon: "/VioletCraftworks/squares-four-thin-svgrepo-com.svg", label: "Catalog", alt: "Catalog grid icon" },
        { icon: "/VioletCraftworks/filter-edit-svgrepo-com.svg", label: "Filters", alt: "Filter icon" },
        { icon: "/VioletCraftworks/paper-with-text-lines-svgrepo-com.svg", label: "Product detail", alt: "Product detail icon" },
      ],
    },
    learn: {
      icon: "/VioletCraftworks/open-book-svgrepo-com.svg",
      alt: "Open book icon",
      title: "I need help choosing",
      sub: "(Learn)",
      items: [
        { icon: "/VioletCraftworks/open-book-svgrepo-com.svg", label: "Beginner Hub", alt: "Open book icon" },
        { icon: "/VioletCraftworks/pencil-svgrepo-com.svg", label: "Blog / Guides", alt: "Pencil icon" },
        { icon: "/VioletCraftworks/heart-svgrepo-com.svg", label: "Beginner-friendly patterns", alt: "Heart icon" },
      ],
    },
  };

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const cs = project.caseStudy || {};
  const liveUrl = project.links?.live || "";
  const roleList = toArray(cs.roleList);
  const decisions = toArray(cs.decisions);
  const technicalDecisions = toArray(cs.technicalDecisions);
  const swatches = toArray(cs.visualDirection?.swatches);
  const resultItems = toArray(cs.results?.items);


  const laptopScreenSrc = process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-computer-img.png";

  return (
    <div className="vc-page">
      {/* ═══ HERO ═══ */}
      <section className="vc-hero">
        <div className="vc-hero__inner">
          <div className="vc-hero__content">
            <div className="vc-hero__badges">
              <span className="vc-eyebrow">
                <span className="vc-eyebrow__line" />
                Featured Case Study
              </span>
            </div>

            <h1 className="vc-hero__title">{project.name}</h1>
            {project.subtitle && <div className="vc-hero__subtitle">{project.subtitle}</div>}
            {project.heroStatement && <p className="vc-hero__statement">{project.heroStatement}</p>}
            {project.heroSubtext && <p className="vc-hero__subtext">{project.heroSubtext}</p>}

            <div className="vc-hero__ctas">
              {liveUrl && (
                <a className="vc-btn" href={liveUrl} target="_blank" rel="noreferrer">
                  <svg className="vc-btn__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" d="M255.994,0.006C114.607,0.013,0.012,114.612,0,256c0.012,141.387,114.607,255.986,255.994,255.994
                      C397.393,511.986,511.992,397.387,512,256C511.992,114.612,397.393,0.013,255.994,0.006z M97.607,97.612
                      c23.34-23.328,51.761-41.475,83.455-52.725c-15.183,18.375-27.84,41.906-37.757,69.116H82.772
                      C87.452,108.308,92.396,102.824,97.607,97.612z M65.612,138.003h69.986c-9.008,31.929-14.41,67.834-15.363,105.997H32.327
                      C34.374,205.196,46.3,169.088,65.612,138.003z M65.612,373.997C46.3,342.912,34.374,306.804,32.327,268h87.991
                      c0.961,38.124,6.21,74.092,15.206,105.998H65.612z M97.607,414.386c-5.211-5.211-10.156-10.695-14.836-16.39h60.573
                      c4.28,11.774,9.019,22.944,14.312,33.21c6.954,13.438,14.758,25.468,23.348,35.89C149.332,455.846,120.931,437.699,97.607,414.386z
                      M243.998,479.667c-3.746-0.196-7.469-0.477-11.164-0.86c-5.89-2.64-11.722-6.25-17.5-10.961
                      c-17.632-14.359-33.976-38.671-46.398-69.85h75.061V479.667z M243.998,373.997h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998
                      h99.763V373.997z M243.998,244H144.31c1.008-38.71,6.875-74.819,16.359-105.997h83.33V244z M243.998,114.003h-74.951
                      c3.109-7.79,6.367-15.312,9.934-22.195c10.64-20.625,23.17-36.89,36.354-47.656c5.777-4.71,11.609-8.32,17.5-10.96
                      c3.695-0.382,7.417-0.664,11.164-0.859V114.003z M446.392,138.003c19.312,31.085,31.234,67.194,33.281,105.997h-87.991
                      c-0.961-38.124-6.21-74.092-15.21-105.997H446.392z M414.393,97.612c5.211,5.211,10.156,10.696,14.836,16.391h-60.577
                      c-4.281-11.773-9.023-22.945-14.312-33.21c-6.953-13.437-14.758-25.468-23.347-35.89C362.668,56.16,391.065,74.301,414.393,97.612z
                      M267.998,32.333c3.746,0.195,7.469,0.484,11.16,0.859c5.89,2.649,11.723,6.25,17.504,10.96
                      c17.636,14.359,33.976,38.671,46.397,69.85h-75.061V32.333z M267.998,138.003h83.436c9.476,31.171,15.32,67.31,16.328,105.997
                      h-99.764V138.003z M267.998,268h99.685c-1.007,38.71-6.874,74.818-16.359,105.998h-83.326V268z M296.661,467.846
                      c-5.781,4.711-11.614,8.313-17.504,10.961c-3.691,0.375-7.414,0.664-11.16,0.86v-81.67h74.951
                      c-3.109,7.789-6.367,15.312-9.933,22.195C322.376,440.816,309.845,457.081,296.661,467.846z M414.393,414.386
                      c-23.336,23.328-51.764,41.476-83.459,52.725c15.187-18.375,27.835-41.905,37.757-69.115h60.538
                      C424.548,403.692,419.604,409.176,414.393,414.386z M446.392,373.997h-69.998c9.008-31.929,14.414-67.842,15.367-105.998h87.912
                      C477.626,306.804,465.704,342.912,446.392,373.997z"/>
                  </svg>
                  <span>Open VioletCraftworks.com</span>
                </a>
              )}
              <a className="vc-btn vc-btn--ghost" href="#vc-results">
                <span>View results &darr;</span>
              </a>
            </div>
          </div>

          <div className="vc-hero__devices">
            <DuoScene
              autoplay
              laptopModelSrc={process.env.PUBLIC_URL + "/models/laptop-draco.glb"}
              laptopScreenSrc={laptopScreenSrc}
              phoneModelSrc={process.env.PUBLIC_URL + "/models/phone.glb"}
              phoneSlides={PHONE_SLIDES}
              fallbackImageSrc={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-laptop-mvp.png"}
            />
          </div>
        </div>
      </section>

      {/* ═══ STITCH DIVIDER ═══ */}
      <div className="vc-stitch-divider" aria-hidden="true">
        {Array.from({ length: 32 }, (_, i) => (
          <span className="vc-stitch-divider__x" key={i} style={{ "--i": i }} />
        ))}
      </div>

      {/* ═══ META ROW ═══ */}
      <section className="vc-meta vc-reveal">
        {[
          ["Year", project.year],
          ["Role", project.role],
          ["Category", project.category],
          ["Platform", project.platform],
          ["Status", project.duration],
        ]
          .filter(([, v]) => v)
          .map(([label, value]) => (
            <div className="vc-meta__item" key={label}>
              <span className="vc-meta__label">{label}</span>
              <span className="vc-meta__value">{value}</span>
            </div>
          ))}
      </section>

      <div className="vc-wrap">
        {/* ═══ 01 — MY ROLE ═══ */}
        {roleList.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">My Role</span>
            </div>
            <div className="vc-role-head">
              <h2 className="vc-h2 vc-role-head__title">What I did</h2>
            </div>
            <div className="vc-role-grid">
              {roleList.map((r, i) => (
                <div className="vc-role-card" key={i}>
                  <div className="vc-role-card__num">0{i + 1}</div>
                  <div className="vc-role-card__title">{r.title}</div>
                  <div className="vc-role-card__body">{r.body}</div>
                </div>
              ))}
            </div>
            <p className="vc-collaboration-note">
              Although I designed and developed the site independently, customer messages, community discussions, behavioral analytics, and feedback from working stitchers informed the product decisions.
            </p>
          </section>
        )}

        {/* ═══ 03 — THE PROBLEM ═══ */}
        {cs.problemStatement && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">The Problem</span>
            </div>
            {cs.problemHeadline ? (
              <h2 className="vc-h2 vc-h2--left vc-problem-headline">
                {cs.problemHeadline.map((line, i) => (
                  <span className="vc-problem-headline__line" key={i}>{line}</span>
                ))}
              </h2>
            ) : (
              <h2 className="vc-h2">What the shop was up against</h2>
            )}

            <p className="vc-sub vc-problem-sub">{cs.problemStatement}</p>

            {cs.problemStats && (
              <div className="vc-problem-stats">
                {cs.problemStats.map((stat, i) => (
                  <div className="vc-problem-stat" key={i}>
                    <div className="vc-problem-stat__value">{stat.value}</div>
                    <div className="vc-problem-stat__label">{stat.label}</div>
                    <div className="vc-problem-stat__caption">{stat.caption}</div>
                  </div>
                ))}
              </div>
            )}

            {cs.problemInsight && (
              <p className="vc-lead" style={{ marginTop: "32px" }}>{cs.problemInsight}</p>
            )}

            <div className="vc-etsy-shot">
              <button
                className="vc-etsy-shot__media"
                type="button"
                onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-etsy-view.png")}
              >
                <img
                  className="vc-etsy-shot__img"
                  src={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-etsy-view.png"}
                  alt="VioletCraftworks Etsy storefront"
                />
                {etsyPainPoints.map((point) => (
                  <div className={`vc-etsy-annot ${point.className}`} key={point.title}>
                    <span className="vc-etsy-annot__dot" />
                    <div className="vc-etsy-annot__card">
                      <div className="vc-etsy-annot__title">{point.title}</div>
                      <p className="vc-etsy-annot__body">{point.body}</p>
                    </div>
                  </div>
                ))}
              </button>
            </div>

            <button
              className="vc-img-btn"
              type="button"
              onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/Before-to-Opportunity.png")}
            >
              <img
                className="vc-case-img"
                src={process.env.PUBLIC_URL + "/VioletCraftworks/Before-to-Opportunity.png"}
                alt="Diagram showing the gap between Etsy's limitations and the design opportunity"
              />
            </button>
          </section>
        )}

        {/* ═══ 04 — PRODUCT STRATEGY ═══ */}
        {cs.strategy && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">Product Strategy</span>
            </div>
            <h2 className="vc-h2 vc-h2--left">How I shaped the experience</h2>

            <div className="vc-strategy-split">
              <div className="vc-strategy-split__text">
                <p className="vc-lead vc-strategy__lead-full">{cs.strategy}</p>

                <div className="vc-takeaway">
                  <span className="vc-takeaway__icon">
                    <img
                      src={process.env.PUBLIC_URL + "/VioletCraftworks/lightbulb-svgrepo-com.svg"}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <div className="vc-takeaway__title">Design takeaway</div>
                    <p className="vc-takeaway__body">
                      Separating guided discovery from direct browsing helped beginners get confidence and repeat stitchers find patterns faster.
                    </p>
                  </div>
                </div>
              </div>

            <div className="vc-strategy-map" aria-label="Two paths, one goal user flow">
              <div className="vc-strategy-map__eyebrow">Two paths, one goal</div>

              <div className="vc-strategy-map__arrival">
                <span className="vc-strategy-map__pin">
                  <img
                    className="vc-strategy-map__arrival-icon"
                    src={process.env.PUBLIC_URL + "/VioletCraftworks/profile-round-1342-svgrepo-com.svg"}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <span className="vc-strategy-map__arrival-text">Visitor arrives</span>
              </div>

              <div className="vc-strategy-map__split" aria-hidden="true">
                <span className="vc-strategy-map__split-stem" />
                <span className="vc-strategy-map__split-node" />
                <span className="vc-strategy-map__split-branch vc-strategy-map__split-branch--shop" />
                <span className="vc-strategy-map__split-branch vc-strategy-map__split-branch--learn" />
              </div>

              <div className="vc-strategy-map__cards">
                <div className="vc-path-card vc-path-card--shop">
                  <div className="vc-path-card__header">
                    <span className="vc-path-card__icon">
                      <img src={process.env.PUBLIC_URL + strategyPaths.shop.icon} alt={strategyPaths.shop.alt} />
                    </span>
                    <div className="vc-path-card__heading">
                      <div className="vc-path-card__title">{strategyPaths.shop.title}</div>
                      <div className="vc-path-card__sub">{strategyPaths.shop.sub}</div>
                    </div>
                  </div>
                  <ul className="vc-path-card__list">
                    {strategyPaths.shop.items.map((item) => (
                      <li key={item.label}>
                        <span className="vc-path-card__item-icon">
                          <img src={process.env.PUBLIC_URL + item.icon} alt={item.alt} />
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="vc-path-card vc-path-card--learn">
                  <div className="vc-path-card__header">
                    <span className="vc-path-card__icon">
                      <img src={process.env.PUBLIC_URL + strategyPaths.learn.icon} alt={strategyPaths.learn.alt} />
                    </span>
                    <div className="vc-path-card__heading">
                      <div className="vc-path-card__title">{strategyPaths.learn.title}</div>
                      <div className="vc-path-card__sub">{strategyPaths.learn.sub}</div>
                    </div>
                  </div>
                  <ul className="vc-path-card__list">
                    {strategyPaths.learn.items.map((item) => (
                      <li key={item.label}>
                        <span className="vc-path-card__item-icon">
                          <img src={process.env.PUBLIC_URL + item.icon} alt={item.alt} />
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="vc-strategy-map__converge" aria-hidden="true">
                <span className="vc-strategy-map__converge-branch vc-strategy-map__converge-branch--shop" />
                <span className="vc-strategy-map__converge-branch vc-strategy-map__converge-branch--learn" />
                <span className="vc-strategy-map__converge-node" />
                <span className="vc-strategy-map__converge-stem" />
              </div>

              <div className="vc-strategy-map__result">
                <span className="vc-strategy-map__result-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/VioletCraftworks/shopping-bag-svgrepo-com.svg"}
                    alt="Shopping bag icon"
                  />
                </span>
                <div>
                  <div className="vc-strategy-map__result-title">Confident purchase</div>
                  <div className="vc-strategy-map__result-sub">Buy direct with Stripe or purchase on Etsy</div>
                </div>
              </div>
            </div>
            </div>
          </section>
        )}

      </div>

      {/* ═══ LIGHT BAND — decisions + visual ═══ */}
      <section className="vc-light">
        <div className="vc-light__wrap">
          {decisions.length > 0 && (
            <div className="vc-section vc-reveal">
              <div className="vc-section-label vc-section-label--light">
                <span className="vc-section-label__line" />
                <span className="vc-section-label__text">Key Decisions</span>
              </div>
              <h2 className="vc-h2 vc-h2--dark">Product decisions</h2>

              <div className="vc-decision-stack">
                {decisions.map((d, i) => (
                  <div className="vc-decision" key={i}>
                    <div className="vc-decision__header">
                      <span className="vc-decision__num">0{i + 1}</span>
                      <h3 className="vc-decision__title">{d.title}</h3>
                    </div>
                    <div className="vc-decision__details">
                      {d.problem && (
                        <div className="vc-decision__block vc-decision__block--problem">
                          <span className="vc-decision__label">Problem</span>
                          <p>{d.problem}</p>
                        </div>
                      )}
                      {d.solution && (
                        <div className="vc-decision__block vc-decision__block--solution">
                          <span className="vc-decision__label">Solution</span>
                          <p>{d.solution}</p>
                        </div>
                      )}
                      {d.rationale && (
                        <div className="vc-decision__block">
                          <span className="vc-decision__label">Why</span>
                          <p>{d.rationale}</p>
                        </div>
                      )}
                      {d.outcome && (
                        <div className="vc-decision__block vc-decision__block--impact">
                          <span className="vc-decision__label">Outcome</span>
                          <p>{d.outcome}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cs.visualDirection && (
            <div className="vc-section vc-reveal">
              <div className="vc-section-label vc-section-label--light">
                <span className="vc-section-label__line" />
                <span className="vc-section-label__text">Visual Direction</span>
              </div>
              <h2 className="vc-h2 vc-h2--dark">The look and feel</h2>
              {cs.visualDirection.intro && (
                <p className="vc-lead vc-lead--dark">{cs.visualDirection.intro}</p>
              )}
              {swatches.length > 0 && (
                <div className="vc-swatches">
                  {swatches.map((s, i) => (
                    <div className="vc-swatch" key={i}>
                      <span className="vc-swatch__chip" style={{ background: s.hex }} />
                      <span className="vc-swatch__name">{s.name}</span>
                      <span className="vc-swatch__hex">{s.hex}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="vc-wrap">
        {/* ═══ 07 — RESULTS (moved before technical) ═══ */}
        {resultItems.length > 0 && (
          <section className="vc-section vc-reveal" id="vc-results">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">Results</span>
            </div>
            <h2 className="vc-h2">What I can measure so far</h2>
            {cs.results?.intro && (
              <p className="vc-sub">{cs.results.intro}</p>
            )}
            <div className="vc-impl-stack">
              {resultItems.map((r, i) => (
                <div className="vc-impl-row" key={i}>
                  <div className="vc-impl-row__title">{r.label}</div>
                  <div className="vc-impl-row__body">{r.body}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ═══ 08 — ENGINEERING (2 full + summary) ═══ */}
        {technicalDecisions.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">Engineering</span>
            </div>
            <h2 className="vc-h2">How it's built and why</h2>
            <div className="vc-decision-stack">
              {technicalDecisions.map((td, i) => (
                <div className="vc-decision" key={i}>
                  <div className="vc-decision__header">
                    <span className="vc-decision__num">0{i + 1}</span>
                    <h3 className="vc-decision__title">{td.title}</h3>
                  </div>
                  <div className="vc-decision__details">
                    {td.context && (
                      <div className="vc-decision__block vc-decision__block--problem">
                        <span className="vc-decision__label">Context</span>
                        <p>{td.context}</p>
                      </div>
                    )}
                    {td.decision && (
                      <div className="vc-decision__block vc-decision__block--solution">
                        <span className="vc-decision__label">Decision</span>
                        <p>{td.decision}</p>
                      </div>
                    )}
                    {td.tradeoff && (
                      <div className="vc-decision__block">
                        <span className="vc-decision__label">Tradeoff</span>
                        <p>{td.tradeoff}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {cs.technicalSummary && (
              <div className="vc-tech-summary">
                <div className="vc-tech-summary__label">Reliability &amp; deployment</div>
                <p className="vc-tech-summary__body">{cs.technicalSummary}</p>
              </div>
            )}
          </section>
        )}

        {/* ═══ 09 — REFLECTION ═══ */}
        {cs.reflection && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">Reflection</span>
            </div>
            <h2 className="vc-h2">What I learned</h2>
            <blockquote className="vc-closing">{cs.reflection}</blockquote>
            {liveUrl && (
              <a className="vc-btn vc-btn--center" href={liveUrl} target="_blank" rel="noreferrer">
                <span>Visit the live site &#8599;</span>
              </a>
            )}
          </section>
        )}

        {/* ═══ BOTTOM NAV ═══ */}
        <section className="vc-bottom-nav">
          {prev ? (
            <Link className="vc-nav-pill" to={`/projects/${prev.slug}`}>
              &larr; Previous Project
            </Link>
          ) : (
            <span className="vc-nav-pill vc-nav-pill--disabled">&larr; Previous Project</span>
          )}
          <Link className="vc-nav-pill vc-nav-pill--primary" to="/projects">
            View All Projects
          </Link>
          {next ? (
            <Link className="vc-nav-pill" to={`/projects/${next.slug}`}>
              Next Project &rarr;
            </Link>
          ) : (
            <span className="vc-nav-pill vc-nav-pill--disabled">Next Project &rarr;</span>
          )}
        </section>
      </div>

      {lightboxSrc && (
        <div className="vc-lightbox" onClick={closeLightbox}>
          <button className="vc-lightbox__back" onClick={closeLightbox}>
            &larr; Back
          </button>
          <img className="vc-lightbox__img" src={lightboxSrc} alt="Full size preview" />
          <p className="vc-lightbox__hint">Click anywhere to close</p>
        </div>
      )}
    </div>
  );
}
