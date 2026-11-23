import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading title="About Me" />
        
        <div className="about-content">
          <div className="about-text">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-highlights-grid">
            {personalInfo.highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <span className="highlight-label">{item.label}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
