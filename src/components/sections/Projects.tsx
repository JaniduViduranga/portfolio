import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web' | 'Mobile'>('All');
  const categories: Array<'All' | 'Web' | 'Mobile'> = ['All', 'Web', 'Mobile'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeading title="Projects" />

        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category} Projects
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
