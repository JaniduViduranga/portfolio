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
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // Touch tracking for mobile swipe gestures
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

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

  // Pagination calculation for desktop: 2 projects per page
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleCategorySelect = (category: FilterTab) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset desktop pagination
    setMobileIndex(0); // Reset mobile slider to first card
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

  // Mobile slider navigation handlers
  const handleMobilePrev = () => {
    setMobileIndex((prev) => Math.max(0, prev - 1));
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => Math.min(filteredProjects.length - 1, prev + 1));
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance && mobileIndex < filteredProjects.length - 1) {
      // Swiped left -> next card
      setMobileIndex((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && mobileIndex > 0) {
      // Swiped right -> previous card
      setMobileIndex((prev) => prev - 1);
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
                className={`project-filter-btn ${selectedCategory === category ? 'active' : ''
                  }`}
                onClick={() => handleCategorySelect(category)}
              >
                <span>{category}</span>
                <span className="filter-count-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* ================================================================
            DESKTOP SHOWCASE (2 Cards per page, Side Nav Buttons, Pagination)
            Hidden on mobile view via CSS
            ================================================================ */}
        <div className="projects-showcase-desktop">
          <div className="projects-showcase-wrapper">
            {totalPages > 1 && (
              <button
                type="button"
                className="project-side-nav-btn project-side-nav-prev"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous project page"
                title="Previous projects"
              >
                <i className="fas fa-chevron-left" aria-hidden="true" />
                <span>Prev</span>
              </button>
            )}

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

            {totalPages > 1 && (
              <button
                type="button"
                className="project-side-nav-btn project-side-nav-next"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next project page"
                title="Next projects"
              >
                <span>Next</span>
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* 2-per-page Pagination Controls for Desktop */}
          {totalPages > 1 && (
            <div className="projects-pagination-container">
              <div className="pagination-info">
                Showing {startIndex + 1}–{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
              </div>

              <div className="pagination-controls">
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
              </div>
            </div>
          )}
        </div>

        {/* ================================================================
            MOBILE HORIZONTAL SLIDER (1 Card at a time, Side Arrows only)
            Visible only on mobile view via CSS
            ================================================================ */}
        {filteredProjects.length > 0 && (
          <div className="projects-showcase-mobile">
            <div className="mobile-slider-wrapper">
              {/* Left Arrow Button (Chevron Only on the side of the project card) */}
              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  className="project-mobile-arrow project-mobile-arrow-prev"
                  disabled={mobileIndex === 0}
                  onClick={handleMobilePrev}
                  aria-label="Previous project"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true" />
                </button>
              )}

              {/* Viewport & Horizontal Track with Touch Gestures */}
              <div
                className="mobile-slider-viewport"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="mobile-slider-track"
                  style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
                >
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="mobile-slider-slide">
                      <ProjectCard
                        project={project}
                        onImageClick={(proj) => setModalProject(proj)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow Button (Chevron Only on the side of the project card) */}
              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  className="project-mobile-arrow project-mobile-arrow-next"
                  disabled={mobileIndex === filteredProjects.length - 1}
                  onClick={handleMobileNext}
                  aria-label="Next project"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Mobile Slider Dots & Counter */}
            {filteredProjects.length > 1 && (
              <div className="mobile-slider-pagination">
                <div className="mobile-slider-dots">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`mobile-slider-dot ${mobileIndex === idx ? 'active' : ''}`}
                      onClick={() => setMobileIndex(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="mobile-slider-counter">
                  {mobileIndex + 1} / {filteredProjects.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <i className="fas fa-folder-open" aria-hidden="true" />
            <p>No projects currently listed under {selectedCategory}. Check back soon!</p>
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
