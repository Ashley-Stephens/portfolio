import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./VioletCraftworksCaseStudy.scss";

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
  const shopperFlow = [
    {
      icon: "/VioletCraftworks/magnifier-svgrepo-com.svg",
      title: "1. Browse",
      body: "Find the perfect pattern",
      alt: "Magnifying glass icon",
    },
    {
      icon: "/VioletCraftworks/paper-svgrepo-com.svg",
      title: "2. View Details",
      body: "See size, colors, chart and info",
      alt: "Paper details icon",
    },
    {
      icon: "/VioletCraftworks/etsy-svgrepo-com.svg",
      title: "3. Buy on Etsy",
      body: "Secure checkout on Etsy",
      alt: "Etsy logo icon",
    },
    {
      icon: "/VioletCraftworks/pdf-svgrepo-com.svg",
      title: "4. Download",
      body: "Instant PDF download",
      alt: "PDF file icon",
    },
  ];
  const strategyPaths = {
    shop: [
      {
        icon: "/VioletCraftworks/squares-four-thin-svgrepo-com.svg",
        label: "Catalog",
        alt: "Catalog grid icon",
        iconClass: "vc-strategy-item__icon--catalog",
      },
      {
        icon: "/VioletCraftworks/filter-edit-svgrepo-com.svg",
        label: "Filters",
        alt: "Filter icon",
        iconClass: "vc-strategy-item__icon--filter",
      },
      {
        icon: "/VioletCraftworks/paper-with-text-lines-svgrepo-com.svg",
        label: "Product detail",
        alt: "Product detail icon",
      },
      {
        icon: "/VioletCraftworks/etsy-logo-svgrepo-com.svg",
        label: "Checkout on Etsy",
        alt: "Etsy logo icon",
        isCheckout: true,
      },
    ],
    learn: [
      {
        icon: "/VioletCraftworks/open-book-svgrepo-com.svg",
        label: "Beginner Hub",
        alt: "Open book icon",
        iconClass: "vc-strategy-item__icon--book",
      },
      {
        icon: "/VioletCraftworks/pencil-svgrepo-com.svg",
        label: "Blog / Guides",
        alt: "Pencil icon",
      },
      {
        icon: "/VioletCraftworks/heart-svgrepo-com.svg",
        label: "Beginner-friendly patterns",
        alt: "Heart icon",
      },
      {
        icon: "/VioletCraftworks/etsy-logo-svgrepo-com.svg",
        label: "Checkout on Etsy",
        alt: "Etsy logo icon",
        isCheckout: true,
      },
    ],
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
  const goals = toArray(cs.goals);
  const constraints = toArray(cs.constraints);
  const users = toArray(cs.users);
  const decisions = toArray(cs.decisions);
  const ia = toArray(cs.ia);
  const implementation = toArray(cs.implementation);
  const future = toArray(cs.future);
  const swatches = toArray(cs.visualDirection?.swatches);

  let sn = 0;
  const num = () => "0" + ++sn;

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
              {project.wip && <span className="vc-wip">Live MVP</span>}
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

        {(problemBullets.length > 0 || cs.problemQuote) && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; The Problem</span>
            </div>
            <h2 className="vc-h2">What the shop was up against</h2>

            {cs.problemQuote && (
              <blockquote className="vc-quote">
                <p className="vc-quote__text">&ldquo;{cs.problemQuote}&rdquo;</p>
                <p className="vc-quote__author">What a typical shopper wants</p>
              </blockquote>
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
          </section>
        )}

        <section className="vc-section vc-reveal">
          <div className="vc-section-label">
            <span className="vc-section-label__line" />
            <span className="vc-section-label__text">{num()} &middot; Etsy Limits</span>
          </div>
          <h2 className="vc-h2">What the Etsy storefront could not do well</h2>
          <p className="vc-sub">
            This was the starting point: useful for checkout, but too constrained for storytelling, education, and a better shopping path.
          </p>
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
        </section>

        <section className="vc-section vc-reveal">
          <div className="vc-section-label">
            <span className="vc-section-label__line" />
            <span className="vc-section-label__text">{num()} &middot; Design Opportunity</span>
          </div>
          <h2 className="vc-h2">From friction to opportunity</h2>
          <button
            className="vc-img-btn"
            type="button"
            onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/Before-to-Opportunity.png")}
          >
            <img
              className="vc-case-img"
              src={process.env.PUBLIC_URL + "/VioletCraftworks/Before-to-Opportunity.png"}
              alt="Before to opportunity diagram showing the core friction and design opportunity"
            />
          </button>
        </section>

        {(goals.length > 0 || constraints.length > 0) && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Goals & Constraints</span>
            </div>
            <h2 className="vc-h2">What it had to do, and what I had to work with</h2>
            <div className="vc-gc">
              {goals.length > 0 && (
                <div className="vc-gc__col vc-gc__col--goals">
                  <div className="vc-gc__head">Goals</div>
                  <ul className="vc-gc__list">
                    {goals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              )}
              {constraints.length > 0 && (
                <div className="vc-gc__col vc-gc__col--constraints">
                  <div className="vc-gc__head">Constraints</div>
                  <ul className="vc-gc__list">
                    {constraints.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {users.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Target Users</span>
            </div>
            <div className="vc-users-intro">
              <h2 className="vc-h2 vc-h2--users">Who it's for</h2>
              <p className="vc-sub vc-sub--users">
                Different stitchers, different needs. Here's who the catalog is built for.
              </p>
            </div>
            <div className="vc-users-layout">
              <div className="vc-users-figure">
                <img
                  className="vc-users-figure__img"
                  src={process.env.PUBLIC_URL + "/VioletCraftworks/user-image.png"}
                  alt="Pixel art stitcher character"
                />
              </div>
              <div className="vc-users-grid">
                {users.map((u, i) => (
                  <div className="vc-user-card" key={i}>
                    <div className="vc-user-card__tag">{u.tag}</div>
                    <div className="vc-user-card__body">{u.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {cs.strategy && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; UX Strategy</span>
            </div>
            <h2 className="vc-h2">How I shaped the experience</h2>
            <div className="vc-strategy">
              <p className="vc-lead vc-strategy__lead">{cs.strategy}</p>
                <div className="vc-strategy-map" aria-label="Two paths, one goal user flow">
                <div className="vc-strategy-map__eyebrow">Two paths, one goal</div>
                <div className="vc-strategy-map__arrival">
                  <img
                    className="vc-strategy-map__arrival-icon"
                    src={process.env.PUBLIC_URL + "/VioletCraftworks/profile-round-1342-svgrepo-com.svg"}
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="vc-strategy-map__arrival-text">Visitor arrives</span>
                </div>
                <div className="vc-strategy-map__split" aria-hidden="true">
                  <span className="vc-strategy-map__split-stem" />
                  <span className="vc-strategy-map__split-node" />
                  <span className="vc-strategy-map__split-branch vc-strategy-map__split-branch--shop" />
                  <span className="vc-strategy-map__split-branch vc-strategy-map__split-branch--learn" />
                </div>

                <div className="vc-strategy-map__columns">
                  <div className="vc-strategy-rail vc-strategy-rail--shop">
                    <div className="vc-strategy-rail__pill">
                      <img
                        className="vc-strategy-rail__pill-icon"
                        src={process.env.PUBLIC_URL + "/VioletCraftworks/shopping-bag-svgrepo-com.svg"}
                        alt="Shopping bag icon"
                      />
                      <div className="vc-strategy-rail__pill-text">
                        <div className="vc-strategy-rail__pill-title">I know what I want</div>
                        <div className="vc-strategy-rail__pill-sub">(Shop)</div>
                      </div>
                    </div>
                    <div className="vc-strategy-rail__line" aria-hidden="true" />
                    {strategyPaths.shop.map((item) => (
                      <React.Fragment key={item.label}>
                        <div className={`vc-strategy-item${item.isCheckout ? " vc-strategy-item--checkout" : ""}`}>
                          <div className={`vc-strategy-item__icon-wrap${item.isCheckout ? " vc-strategy-item__icon-wrap--logo" : ""}`}>
                            <img
                              className={`vc-strategy-item__icon${item.iconClass ? ` ${item.iconClass}` : ""}`}
                              src={process.env.PUBLIC_URL + item.icon}
                              alt={item.alt}
                            />
                          </div>
                          <div className="vc-strategy-item__label">{item.label}</div>
                        </div>
                        {!item.isCheckout && <div className="vc-strategy-rail__line" aria-hidden="true" />}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="vc-strategy-rail vc-strategy-rail--learn">
                    <div className="vc-strategy-rail__pill vc-strategy-rail__pill--learn">
                      <img
                        className="vc-strategy-rail__pill-icon vc-strategy-rail__pill-icon--book"
                        src={process.env.PUBLIC_URL + "/VioletCraftworks/open-book-svgrepo-com.svg"}
                        alt="Open book icon"
                      />
                      <div className="vc-strategy-rail__pill-text">
                        <div className="vc-strategy-rail__pill-title">I need help choosing</div>
                        <div className="vc-strategy-rail__pill-sub">(Learn)</div>
                      </div>
                    </div>
                    <div className="vc-strategy-rail__line vc-strategy-rail__line--learn" aria-hidden="true" />
                    {strategyPaths.learn.map((item) => (
                      <React.Fragment key={item.label}>
                        <div className={`vc-strategy-item vc-strategy-item--learn${item.isCheckout ? " vc-strategy-item--checkout" : ""}`}>
                          <div className={`vc-strategy-item__icon-wrap vc-strategy-item__icon-wrap--learn${item.isCheckout ? " vc-strategy-item__icon-wrap--logo" : ""}`}>
                            <img
                              className={`vc-strategy-item__icon${item.iconClass ? ` ${item.iconClass}` : ""}`}
                              src={process.env.PUBLIC_URL + item.icon}
                              alt={item.alt}
                            />
                          </div>
                          <div className="vc-strategy-item__label">{item.label}</div>
                        </div>
                        {!item.isCheckout && <div className="vc-strategy-rail__line vc-strategy-rail__line--learn" aria-hidden="true" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="vc-section vc-reveal">
          <div className="vc-section-label">
            <span className="vc-section-label__line" />
            <span className="vc-section-label__text">{num()} &middot; Shopper Flow</span>
          </div>
          <h2 className="vc-h2">How the buying path works</h2>
          <p className="vc-sub">
            Shoppers browse the storefront, check the pattern details, complete checkout on Etsy, and get the PDF right away.
          </p>
          <div className="vc-flow" aria-label="VioletCraftworks shopper flow">
            {shopperFlow.map((step, index) => (
              <React.Fragment key={step.title}>
                <article className="vc-flow__step">
                  <div className="vc-flow__icon-wrap">
                    <img
                      className="vc-flow__icon"
                      src={process.env.PUBLIC_URL + step.icon}
                      alt={step.alt}
                    />
                  </div>
                  <h3 className="vc-flow__title">{step.title}</h3>
                  <p className="vc-flow__body">{step.body}</p>
                </article>
                {index < shopperFlow.length - 1 && (
                  <div className="vc-flow__arrow" aria-hidden="true">
                    &#8594;
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="vc-section vc-reveal">
          <div className="vc-section-label">
            <span className="vc-section-label__line" />
            <span className="vc-section-label__text">{num()} &middot; Wireframes</span>
          </div>
          <h2 className="vc-h2">Lo-fi prototype</h2>
          <p className="vc-sub">Early home page wireframe before visual design was applied.</p>
          <button
            className="vc-img-btn"
            type="button"
            onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/low-fidelity-prototype.png")}
          >
            <img
              className="vc-case-img"
              src={process.env.PUBLIC_URL + "/VioletCraftworks/low-fidelity-prototype.png"}
              alt="Low fidelity prototype of the VioletCraftworks home page"
            />
          </button>
        </section>
      </div>

      <section className="vc-light">
        <div className="vc-light__wrap">
          {decisions.length > 0 && (
            <div className="vc-section vc-reveal">
              <div className="vc-section-label vc-section-label--light">
                <span className="vc-section-label__line" />
                <span className="vc-section-label__text">{num()} &middot; Key Decisions</span>
              </div>
              <h2 className="vc-h2 vc-h2--dark">Design decisions</h2>

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
                      {d.impact && (
                        <div className="vc-decision__block vc-decision__block--impact">
                          <span className="vc-decision__label">Impact</span>
                          <p>{d.impact}</p>
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
        {ia.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Architecture</span>
            </div>
            <h2 className="vc-h2">Information architecture</h2>
            <p className="vc-sub">
              The site is organized so shopping and learning stay separate, and the structure can grow as the catalog does.
            </p>
            <div className="vc-ia-grid">
              {ia.map((g, i) => (
                <div className="vc-ia-col" key={i}>
                  <div className="vc-ia-col__group">{g.group}</div>
                  <ul className="vc-ia-col__list">
                    {(g.items || []).map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {implementation.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; Implementation</span>
            </div>
            <h2 className="vc-h2">How it's built</h2>
            <div className="vc-impl-stack">
              {implementation.map((it, i) => (
                <div className="vc-impl-row" key={i}>
                  <div className="vc-impl-row__title">{it.title}</div>
                  <div className="vc-impl-row__body">{it.body}</div>
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
          <h2 className="vc-h2">The MVP, shipped</h2>
          <div className="vc-device-spread">
            <button
              className="vc-device-spread__laptop-btn"
              type="button"
              onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-laptop-mvp.png")}
            >
              <img
                className="vc-device-spread__laptop"
                src={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-laptop-mvp.png"}
                alt="VioletCraftworks home page on laptop"
              />
            </button>
            <button
              className="vc-device-spread__mobile-btn"
              type="button"
              onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-mobile-mvp.png")}
            >
              <img
                className="vc-device-spread__mobile"
                src={process.env.PUBLIC_URL + "/VioletCraftworks/violetcraftworks-mobile-mvp.png"}
                alt="VioletCraftworks home page on mobile"
              />
            </button>
          </div>
          <button
            className="vc-img-btn"
            type="button"
            onClick={() => openLightbox(process.env.PUBLIC_URL + "/VioletCraftworks/shop-screenshot-mvp.png")}
          >
            <img
              className="vc-case-img"
              src={process.env.PUBLIC_URL + "/VioletCraftworks/shop-screenshot-mvp.png"}
              alt="VioletCraftworks shop page showing all patterns"
            />
          </button>
        </section>

        {future.length > 0 && (
          <section className="vc-section vc-reveal">
            <div className="vc-section-label">
              <span className="vc-section-label__line" />
              <span className="vc-section-label__text">{num()} &middot; What's Next</span>
            </div>
            <h2 className="vc-h2">Where it's headed</h2>
            <p className="vc-sub">
              The MVP is live. These are the pieces I'm building toward.
            </p>
            <ul className="vc-future-list">
              {future.map((f, i) => (
                <li className="vc-future-item" key={i}>
                  <span className="vc-future-item__mark">&rarr;</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {cs.reflection && (
          <section className="vc-section vc-reveal">
            <blockquote className="vc-closing">{cs.reflection}</blockquote>
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
