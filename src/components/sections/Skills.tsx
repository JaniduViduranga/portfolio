import React from 'react';
import { portfolioData, type SkillItem } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

// React Icons imports
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiAndroidstudio,
  SiIntellijidea
} from 'react-icons/si';
import {
  FaJava,
  FaCss3Alt,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaTools
} from 'react-icons/fa';
import { MdDevices, MdOutlineViewQuilt, MdOutlineDesignServices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

// Icon resolver for individual skill pills
const renderSkillIcon = (iconKey: string, color: string) => {
  const iconProps = {
    className: 'skill-pill-icon',
    style: { color },
    'aria-hidden': true
  };

  switch (iconKey) {
    case 'javascript':
      return <SiJavascript {...iconProps} />;
    case 'typescript':
      return <SiTypescript {...iconProps} />;
    case 'python':
      return <SiPython {...iconProps} />;
    case 'java':
      return <FaJava {...iconProps} />;
    case 'c':
      return <SiC {...iconProps} />;
    case 'html5':
      return <SiHtml5 {...iconProps} />;
    case 'css3':
      return <FaCss3Alt {...iconProps} />;
    case 'react':
      return <SiReact {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'responsive':
      return <MdDevices {...iconProps} />;
    case 'node':
      return <SiNodedotjs {...iconProps} />;
    case 'express':
      return <SiExpress {...iconProps} />;
    case 'flask':
      return <SiFlask {...iconProps} />;
    case 'restapi':
      return <TbApi {...iconProps} />;
    case 'jwt':
      return <SiJsonwebtokens {...iconProps} />;
    case 'mysql':
      return <SiMysql {...iconProps} />;
    case 'mongodb':
      return <SiMongodb {...iconProps} />;
    case 'firebase':
      return <SiFirebase {...iconProps} />;
    case 'postgresql':
      return <SiPostgresql {...iconProps} />;
    case 'figma':
      return <SiFigma {...iconProps} />;
    case 'wireframe':
      return <MdOutlineViewQuilt {...iconProps} />;
    case 'prototype':
      return <MdOutlineDesignServices {...iconProps} />;
    case 'git':
      return <SiGit {...iconProps} />;
    case 'github':
      return <SiGithub {...iconProps} />;
    case 'postman':
      return <SiPostman {...iconProps} />;
    case 'vscode':
      return <VscVscode {...iconProps} />;
    case 'androidstudio':
      return <SiAndroidstudio {...iconProps} />;
    case 'intellij':
      return <SiIntellijidea {...iconProps} />;
    default:
      return <FaCode {...iconProps} />;
  }
};

// Category header icon resolver
const renderCategoryIcon = (iconKey: string) => {
  const iconProps = { className: 'category-icon', 'aria-hidden': true };
  switch (iconKey) {
    case 'code':
      return <FaCode {...iconProps} />;
    case 'frontend':
      return <FaLaptopCode {...iconProps} />;
    case 'backend':
      return <FaServer {...iconProps} />;
    case 'database':
      return <FaDatabase {...iconProps} />;
    case 'design':
      return <FaPaintBrush {...iconProps} />;
    case 'tools':
      return <FaTools {...iconProps} />;
    default:
      return <FaCode {...iconProps} />;
  }
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit spanning programming languages, frontend/backend engineering, database architecture, design systems, and developer workflows."
        />

        <div className="skills-category-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {renderCategoryIcon(cat.iconKey)}
                </div>
                <div className="category-header-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>

              <div className="skills-pill-group">
                {cat.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="skill-pill"
                    tabIndex={0}
                    title={`${skill.name} (${cat.title})`}
                  >
                    <span className="skill-pill-icon-container">
                      {renderSkillIcon(skill.iconKey, skill.color)}
                    </span>
                    <span className="skill-pill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
