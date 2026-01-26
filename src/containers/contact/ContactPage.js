import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { socialMediaLinks } from "../../portfolio";
import "./ContactPage.scss";

export default function ContactPage() {
  const email = socialMediaLinks.gmail || "";
  const gmailCompose = email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Hello Ashley")}`
    : "";
  const linkedin = socialMediaLinks.linkedin || "";
  const github = socialMediaLinks.github || ""; // optional if you add it later

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-card" aria-label="Contact">
          <div className="contact-top">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-subtitle">
              Fastest way to reach me: email.
            </p>
          </div>

          <div className="contact-rows">
            {email && (
              <div className="contact-row">
                <div className="contact-left">
                  <div className="contact-label">Email</div>
                  <a className="contact-value" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>

                <div className="contact-actions">
                  <a className="contact-btn contact-btn--primary" href={`mailto:${email}`}>
                    Email me
                  </a>

                  <a
                    className="contact-btn contact-btn--primary"
                    href={gmailCompose}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Gmail
                  </a>

                  <button
                    className="contact-btn contact-btn--secondary"
                    type="button"
                    onClick={copyEmail}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            )}

            {linkedin && (
              <div className="contact-row">
                <div className="contact-left">
                  <div className="contact-label">LinkedIn</div>
                  <a
                    className="contact-value"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open profile
                  </a>
                </div>

                <div className="contact-actions">
                  <a
                    className="contact-btn contact-btn--primary"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View LinkedIn
                  </a>
                </div>
              </div>
            )}

            {github && (
              <div className="contact-row">
                <div className="contact-left">
                  <div className="contact-label">GitHub</div>
                  <a
                    className="contact-value"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open GitHub
                  </a>
                </div>

                <div className="contact-actions">
                  <a
                    className="contact-btn contact-btn--primary"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="contact-cta">
            <Link className="contact-btn contact-btn--ghost" to="/resume">
              View resume
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}