import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../styles/projectCard.css';

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card-link"> {/* Wrap the entire card with a Link */}
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.videoUrl && (
          <iframe
            src={project.videoUrl}
            allow="autoplay"
            title={project.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;
