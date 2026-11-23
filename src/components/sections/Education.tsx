import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education">
      <div className="container">
        <SectionHeading title="Education" />

        <div className="education-content">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <div className="education-info">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p className="education-year">{item.year}</p>
                <p className="education-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
