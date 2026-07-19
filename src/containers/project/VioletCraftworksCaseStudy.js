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
  const heroImage = cs.heroImage || "";
  const liveUrl = project.links?.live || "";
  const roleList = toArray(cs.roleList);
  const problemBullets = toArray(cs.problemBullets);
  const decisions = toArray(cs.decisions);
  const technicalDecisions = toArray(cs.technicalDecisions);
  const future = toArray(cs.future);
  const swatches = toArray(cs.visualDirection?.swatches);
  const resultItems = toArray(cs.results?.items);

  let sn = 0;
  const num = () => { sn++; return sn < 10 ? "0" + sn : String(sn); };

  return (
    <div className="vc-page">
      <section className="vc-hero">
        <div className="vc-hero__inner">
          <div className="vc-hero__content">
            <div className="vc-hero__badges">
              <span className="vc-eyebrow">
                <span className="vc-eyebrow__line" />
                Featured Case Study
              </span>
              {project.wip && <span className="vc-wip">Live</span>}
            </div>

            <h1 className="vc-hero__title">{project.name}</h1>
            {project.subtitle && <div className="vc-hero__subtitle">{project.subtitle}</div>}
            {project.heroStatement && <p className="vc-hero__statement">{project.heroStatement}</p>}
            {project.heroSubtext && <p className="vc-hero__subtext">{project.heroSubtext}</p>}

            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="vc-hero__tags">
                {project.tags.map((t) => (
                  <span className="vc-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {liveUrl && (
              <a className="vc-btn" href={liveUrl} target="_blank" rel="noreferrer">
                Visit the live site &#8599;
              </a>
            )}
          </div>

          {heroImage && (
            <div className="vc-hero__mockup">
              <img
                className="vc-hero__img"
                src={process.env.PUBLIC_URL + heroImage}
                alt={`${project.name} home page`}
                onClick={() => openLightbox(process.env.PUBLIC_URL + heroImage)}
              />
            </div>
          )}
        </div>
      </section>

      <div className="vc-stitch-divider" aria-hidden="true">
        {Array.from({ length: 32 }, (_, i) => (
          <span className="vc-stitch-divider__x" key={i} style={{ "--i": i }} />
        ))}
      </div>

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
        {cs.overview && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Overview</span>
            </div>
            <div className="vc-overview">
              <p className="vc-lead vc-overview__lead">{cs.overview}</p>
              <div className="vc-overview__logo-wrap">
                <img
                  className="vc-overview__logo"
                  src={process.env.PUBLIC_URL + "/VioletCraftworks/violet-logo.png"}
                  alt="VioletCraftworks logo"
                />
              </div>
            </div>
          </section>
        )}

        {roleList.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; My Role</span>
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
          </section>
        )}

        {(problemBullets.length > 0 || cs.problemStatement) && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; The Problem</span>
            </div>
            <h2 className="vc-h2">What the shop was up against</h2>

            {cs.problemStatement && (
              <p className="vc-sub">{cs.problemStatement}</p>
            )}

            {problemBullets.length > 0 && (
              <div className="vc-problem-list">
                {problemBullets.map((b, i) => (
                  <div className="vc-problem-row" key={i}>
                    <span className="vc-problem-num">0{i + 1}</span>
                    <span className="vc-problem-text">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {cs.problemInsight && (
              <p className="vc-lead" style={{ marginTop: "32px" }}>{cs.problemInsight}</p>
            )}

            {cs.evidenceLine && (
              <p className="vc-sub" style={{ marginTop: "16px", fontStyle: "italic" }}>{cs.evidenceLine}</p>
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



        {cs.strategy && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; UX Strategy</span>
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

      <section className="vc-light">
        <div className="vc-light__wrap">
          {decisions.length > 0 && (
            <div className="vc-section vc-reveal">
              <div className="vc-section-label vc-section-label--light">
                <span className="vc-section-label__line" />
                <span className="vc-section-label__text">{num()} &middot; Key Decisions</span>
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
                <span className="vc-section-label__text">{num()} &middot; Visual Direction</span>
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
        {technicalDecisions.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Technical Decisions</span>
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
          </section>
        )}

        <section className="vc-section vc-reveal">
          <div className="vc-section-label">
            <span className="vc-section-label__line" />
            <span className="vc-section-label__text">{num()} &middot; Final Product</span>
          </div>
          <h2 className="vc-h2">The shop, live</h2>
          <DuoScene
            laptopModelSrc={process.env.PUBLIC_URL + "/models/laptop-draco.glb"}
            laptopScreenSrc={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-computer-img.png"}
            phoneModelSrc={process.env.PUBLIC_URL + "/models/phone.glb"}
            phoneSlides={PHONE_SLIDES}
            fallbackImageSrc={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-laptop-mvp.png"}
          />
        </section>

        {resultItems.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Results</span>
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

        {(cs.reflection || future.length > 0) && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Reflection & Next</span>
            </div>
            <h2 className="vc-h2">What I learned and where it's headed</h2>
            {cs.reflection && (
              <blockquote className="vc-closing">{cs.reflection}</blockquote>
            )}
            {future.length > 0 && (
              <ul className="vc-future-list">
                {future.map((f, i) => (
                  <li className="vc-future-item" key={i}>
                    <span className="vc-future-item__mark">&rarr;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {liveUrl && (
              <a className="vc-btn vc-btn--center" href={liveUrl} target="_blank" rel="noreferrer">
                Visit the live site &#8599;
              </a>
            )}
          </section>
        )}

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
