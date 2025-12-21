import React, {useState} from "react";
import "./Footer.scss";
import {socialMediaLinks} from "../../portfolio";

export default function Footer() {
  const email = socialMediaLinks?.gmail || "";
  const linkedin = socialMediaLinks?.linkedin || "";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  // This pre-fills the "To" field in most users’ email setup (Gmail if that’s their default).
  const mailtoHref = email ? `mailto:${email}` : "#";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-copy">© {new Date().getFullYear()} Ashley</span>
        </div>

        <div className="footer-right">
          {linkedin && (
            <a
              className="footer-iconBtn"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          )}

          {email && (
            <div className="footer-emailWrap">
              <a
                className="footer-iconBtn"
                href={mailtoHref}
                aria-label="Email Ashley"
                title="Email"
              >
                <MailIcon />
              </a>

              <span className="footer-emailText">{email}</span>

              <button
                type="button"
                className="footer-iconBtn footer-copyBtn"
                onClick={copyEmail}
                aria-label="Copy email"
                title="Copy email"
              >
                <CopyIcon />
              </button>

              {copied && <span className="footer-copied">Copied</span>}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V23h-4V8.5ZM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.95c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.68V23h-4V8.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z" />
    </svg>
  );
}
