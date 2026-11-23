import React, { useEffect } from 'react';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press and lock body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Image Preview`}
    >
      <div
        className="project-lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image popup"
        >
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        {/* Pure Image Display */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="lightbox-pure-image"
          />
        ) : (
          <div className="lightbox-fallback-box">
            <i className={project.icon} aria-hidden="true" />
            <p>{project.title}</p>
          </div>
        )}

        {/* Minimal Bottom Label */}
        <div className="lightbox-caption">
          <span>{project.title}</span>
          <span className="lightbox-category-tag">{project.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
