import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 70;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="highlight">{personalInfo.firstName}</span>
            </h1>
            <h2 className="home-subtitle">{personalInfo.role}</h2>
            <p className="home-description">{personalInfo.tagline}</p>
            
            <div className="home-buttons">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, 'projects')}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit LinkedIn Profile"
              >
                <i className={socialLinks.linkedin.icon} aria-hidden="true" />
              </a>
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit GitHub Profile"
              >
                <i className={socialLinks.github.icon} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="home-image">
            <div className="image-placeholder">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} Profile`}
                className="profile-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
