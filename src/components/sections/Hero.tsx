import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import codeBackdropImg from '../../assets/code-backdrop.jpg';

// Rotating professional roles
const ROLES = [
  'SOFTWARE ENGINEERING',
  'NETWORK ENGINEERING',
  'DATA ANALYTICS',
];

// Particle data for the floating lights
const PARTICLES = [
  { id: 1, size: 6, left: '20%', duration: 4.2, delay: 0.2, color: 'particle-cobalt' },
  { id: 2, size: 8, left: '35%', duration: 5.5, delay: 1.0, color: 'particle-ice' },
  { id: 3, size: 5, left: '50%', duration: 3.8, delay: 0.5, color: 'particle-cobalt' },
  { id: 4, size: 7, left: '68%', duration: 6.0, delay: 1.8, color: 'particle-ice' },
  { id: 5, size: 4, left: '80%', duration: 4.5, delay: 0.8, color: 'particle-cobalt' },
  { id: 6, size: 9, left: '28%', duration: 5.2, delay: 2.2, color: 'particle-ice' },
  { id: 7, size: 5, left: '60%', duration: 4.8, delay: 1.5, color: 'particle-cobalt' },
  { id: 8, size: 6, left: '85%', duration: 5.0, delay: 2.7, color: 'particle-ice' },
];

export const Hero: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 74;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-content">
          <h1 className="hero-title">
            HI, I'M <span className="hero-highlight">{personalInfo.firstName.toUpperCase()}</span>
            <br />

            <span className="hero-subhead">
              <span className="hero-subhead-fixed">EXPLORING</span>
              <span className="hero-slider-wrapper">
                <span key={roleIndex} className="hero-slider-text">
                  {ROLES[roleIndex]}
                </span>
              </span>
            </span>
          </h1>

          <p className="hero-description">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-hero-primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              <span>VIEW MY PROJECTS</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn btn-hero-secondary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>LET'S WORK TOGETHER</span>
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </a>
          </div>

          <div className="hero-social-block">
            <span className="social-label">CONNECT:</span>
            <div className="hero-social-links">
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Visit LinkedIn Profile"
              >
                <i className={socialLinks.linkedin.icon} aria-hidden="true" />
              </a>
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Visit GitHub Profile"
              >
                <i className={socialLinks.github.icon} aria-hidden="true" />
              </a>
              <a
                href={socialLinks.email.url}
                className="hero-social-icon"
                aria-label="Send Direct Email"
              >
                <i className={socialLinks.email.icon} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Portrait & Rising Cobalt Glow Effect */}
        <div className="hero-visual">
          <div className="hero-visual-inner">
            {/* Layer 1: Outer atmospheric radial glow aura */}
            <div className="hero-glow-aura" aria-hidden="true" />

            {/* Layer 2: Code Backdrop Image - Middle show, outer opacity low with radial gradient */}
            <div className="hero-code-backdrop-container" aria-hidden="true">
              <img
                src={codeBackdropImg}
                alt=""
                className="hero-code-backdrop-img"
              />
            </div>

            {/* Layer 3: Floating electric blue & ice-white light particles */}
            <div className="hero-particles" aria-hidden="true">
              {PARTICLES.map((p) => (
                <span
                  key={p.id}
                  className={`floating-particle ${p.color}`}
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    left: p.left,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                  }}
                />
              ))}
            </div>

            {/* Layer 4: Portrait Image with mix-blend-lighten & gradient fade */}
            <div className="hero-portrait-frame">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} Portrait`}
                className="hero-portrait-image"
                loading="eager"
              />
              <div className="hero-portrait-fade" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
