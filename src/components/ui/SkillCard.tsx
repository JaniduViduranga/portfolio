import React from 'react';
import type { SkillItem } from '../../data/portfolioData';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <i className={skill.icon} aria-hidden="true" />
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <span className="skill-category-badge">{skill.category}</span>
    </div>
  );
};

export default SkillCard;
