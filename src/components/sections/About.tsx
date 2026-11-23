import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;
  const { academic } = personalInfo;

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading title="About Me" />

        <div className="about-content">
          {/* Bio Narratives */}
          <div className="about-text">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Integrated Academic Background Card */}
          {academic && (
            <div className="about-academic-card">
              <div className="academic-card-header">
                <div className="academic-icon-badge">
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                </div>
                <div className="academic-header-info">
                  <div className="academic-status-pill">{academic.status}</div>
                  <h3>{academic.degree}</h3>
                  <h4>{academic.institution}</h4>
                  <span className="academic-timeline">
                    <i className="far fa-calendar-alt" aria-hidden="true" /> {academic.year}
                  </span>
                </div>
              </div>

              <p className="academic-description">{academic.details}</p>

              <div className="academic-focus-block">
                <span className="focus-label">Core Curricular Focus:</span>
                <div className="academic-focus-pills">
                  {academic.focusAreas.map((area, idx) => (
                    <span key={idx} className="focus-pill">
                      <i className="fas fa-check-circle" aria-hidden="true" /> {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
