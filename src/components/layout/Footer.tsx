import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{portfolioData.personalInfo.name}</h3>
            <p>{portfolioData.personalInfo.role} · {portfolioData.personalInfo.university}</p>
          </div>

          <div className="footer-socials">
            <a
              href={portfolioData.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="footer-social-link"
            >
              <i className={portfolioData.socialLinks.linkedin.icon} aria-hidden="true" />
            </a>
            <a
              href={portfolioData.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="footer-social-link"
            >
              <i className={portfolioData.socialLinks.github.icon} aria-hidden="true" />
            </a>
            <a
              href={portfolioData.socialLinks.email.url}
              aria-label="Send Email"
              className="footer-social-link"
            >
              <i className={portfolioData.socialLinks.email.icon} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {currentYear} {portfolioData.personalInfo.firstName}. All rights reserved.</p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <i className="fas fa-arrow-up" aria-hidden="true" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
