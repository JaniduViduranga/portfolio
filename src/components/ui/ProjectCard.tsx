import React from 'react';
import type { ProjectItem } from '../../data/portfolioData';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <i className={project.icon} aria-hidden="true" />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-tech">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

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
              aria-label={`View ${project.title} on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
