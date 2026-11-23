import React, { useState } from 'react';
import { portfolioData, type ProjectCategory, type ProjectItem } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

type FilterTab = 'All' | ProjectCategory;

const PROJECTS_PER_PAGE = 2;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const filterTabs: FilterTab[] = [
    'All',
    'Web Development',
    'Network',
    'Data Analysis',
    'UI/UX Design'
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory
        );

  // Pagination calculation: 2 projects per page
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleCategorySelect = (category: FilterTab) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Smooth scroll back to projects heading
      const section = document.getElementById('projects');
      if (section) {
        const topPos = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      }
    }
  };

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
                onClick={() => handleCategorySelect(category)}
              >
                <span>{category}</span>
                <span className="filter-count-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Wide Project Grid */}
        <div className="projects-grid projects-grid-two-col">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={(proj) => setModalProject(proj)}
            />
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <i className="fas fa-folder-open" aria-hidden="true" />
            <p>No projects currently listed under {selectedCategory}. Check back soon!</p>
          </div>
        )}

        {/* 2-per-page Pagination Controls */}
        {totalPages > 1 && (
          <div className="projects-pagination-container">
            <div className="pagination-info">
              Showing {startIndex + 1}–{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
            </div>

            <div className="pagination-controls">
              <button
                type="button"
                className="pagination-btn pagination-arrow"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous project page"
              >
                <i className="fas fa-chevron-left" aria-hidden="true" />
                <span>Prev</span>
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    className={`pagination-number-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="pagination-btn pagination-arrow"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next project page"
              >
                <span>Next</span>
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Lightbox / Modal Popup */}
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
