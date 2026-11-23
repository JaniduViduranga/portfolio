import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import SkillCard from '../ui/SkillCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Languages', 'Web Development', 'Databases & Systems'];

  const filteredSkills = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeading title="Skills" />

        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
