import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./ContactPage.scss";

export default function ContactPage() {
  const headshotUrl = process.env.PUBLIC_URL + "/headshot.jpg"; // add this file to /public
  const email = socialMediaLinks.gmail;

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
        <div className="contact-card">
          <div className="contact-left">
            <img
              className="contact-photo"
              src={headshotUrl}
              alt={`${greeting.username} headshot`}
            />
          </div>

          <div className="contact-right">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-subtitle">
              Fastest way to reach me: email.
            </p>

            <div className="contact-rows">
              {email && (
                <div className="contact-row">
                  <div className="contact-label">Email</div>
                  <a className="contact-link" href={`mailto:${email}`}>
                    {email}
                  </a>
                  <button className="contact-mini" type="button" onClick={copyEmail}>
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              )}

              {socialMediaLinks.linkedin && (
                <div className="contact-row">
                  <div className="contact-label">LinkedIn</div>
                  <a
                    className="contact-link"
                    href={socialMediaLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open profile
                  </a>
                </div>
              )}

              {socialMediaLinks.github && (
                <div className="contact-row">
                  <div className="contact-label">GitHub</div>
                  <a
                    className="contact-link"
                    href={socialMediaLinks.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open GitHub
                  </a>
                </div>
              )}
            </div>

            <div className="contact-cta">
              <Link className="contact-primary" to="/resume">
                View resume
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
