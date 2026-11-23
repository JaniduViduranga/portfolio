import React, { useState } from 'react';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onImageClick?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onImageClick }) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = Boolean(project.image && !imageError);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onImageClick) {
      onImageClick(project);
    }
  };

  return (
    <article className="project-card">
      {/* Upper Half: Project Image Box (Click to pop up ONLY the image) */}
      <div
        className={`project-image ${hasImage ? 'has-image' : 'has-gradient'}`}
        onClick={handleImageClick}
        title="Click to view full image"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleImageClick(e as unknown as React.MouseEvent);
          }
        }}
      >
        {hasImage ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="project-cover-image"
              loading="lazy"
              onError={() => setImageError(true)}
            />
            <div className="project-image-gradient-overlay" aria-hidden="true" />
          </>
        ) : (
          <div className="project-icon-container">
            <i className={project.icon} aria-hidden="true" />
          </div>
        )}

        <span className="project-category-badge">{project.category}</span>

        {/* Hover Hint to Pop up Image */}
        <div className="project-image-expand-hint" aria-hidden="true">
          <i className="fas fa-search-plus" />
          <span>Click to view image</span>
        </div>
      </div>

      {/* Lower Half: Project Title, Description, and Action Links */}
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>
        
        <p className="project-description-text">{project.description}</p>

        {(project.liveUrl || project.githubUrl || project.figmaUrl || project.FigmaUrl || project.fileUrl || project.projectFileUrl || project.Url) && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View live demo of ${project.title}`}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-github"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <i className="fab fa-github" aria-hidden="true" /> View Code
              </a>
            )}
            {(project.figmaUrl || project.FigmaUrl) && (
              <a
                href={project.figmaUrl || project.FigmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View Figma prototype of ${project.title}`}
              >
                <i className="fab fa-figma" aria-hidden="true" /> View Figma
              </a>
            )}
            {(project.fileUrl || project.projectFileUrl || project.Url) && (
              <a
                href={project.fileUrl || project.projectFileUrl || project.Url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View project files for ${project.title}`}
              >
                <i className="fas fa-folder-open" aria-hidden="true" /> Project Files
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
