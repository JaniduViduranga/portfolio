import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [isInView, setIsInView] = useState(false);
  const [isPastSkills, setIsPastSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      const skillsEl = document.getElementById('skills');

      if (!aboutEl) return;

      const aboutRect = aboutEl.getBoundingClientRect();
      const skillsRect = skillsEl ? skillsEl.getBoundingClientRect() : null;
      const windowHeight = window.innerHeight;

      // When About section is in view
      const aboutInView = aboutRect.top < windowHeight * 0.75 && aboutRect.bottom > 120;
      setIsInView(aboutInView);

      // When Skills section is entered, remove the photo
      if (skillsRect && skillsRect.top <= windowHeight * 0.45) {
        setIsPastSkills(true);
      } else {
        setIsPastSkills(false);
      }
    };

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // Initial evaluation

return () => {
  window.removeEventListener('scroll', handleScroll);
};
  }, []);

return (
  <section id="about" className="about">
    <div className="container">
      <SectionHeading title="About Me" />

      <div className="about-grid-layout">
        {/* Left Column: Description moving to the left */}
        <div
          className={`about-text-col ${isInView && !isPastSkills ? 'desc-moved-left' : ''
            }`}
        >
          <div className="about-text">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Photo dropping into the About page */}
        <div
          className={`about-photo-col ${isInView && !isPastSkills
              ? 'photo-dropped-in'
              : isPastSkills
                ? 'photo-removed'
                : ''
            }`}
        >
          <div className="about-photo-wrapper">
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} Portrait`}
              className="about-portrait-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default About;
