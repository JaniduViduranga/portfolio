import React, { useState } from 'react';
import { portfolioData, type ProjectCategory } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

type FilterTab = 'All' | ProjectCategory;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>('All');

  const filterTabs: FilterTab[] = [
    'All',
    'Web Development',
    'Network',
    'Data Analysis',
    'UI/UX Design'
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore categorized work across full-stack web applications, network architecture simulations, exploratory data analytics, and user experience designs."
        />

        {/* Category Filter Tabs */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
          {filterTabs.map((category) => {
            const count =
              category === 'All'
                ? portfolioData.projects.length
                : portfolioData.projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`project-filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                <span className="filter-count-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <i className="fas fa-folder-open" aria-hidden="true" />
            <p>No projects currently listed under {selectedCategory}. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
