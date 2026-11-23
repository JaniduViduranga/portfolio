import React from 'react';
import type { SkillItem } from '../../data/portfolioData';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="skill-pill">
      <span className="skill-pill-icon-container" style={{ color: skill.color }}>
        <i className="fas fa-code" aria-hidden="true" />
      </span>
      <span className="skill-pill-label">{skill.name}</span>
    </div>
  );
};

export default SkillCard;
