import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/projectCard.css';  // Import CSS styles for individual project card

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* Link to the individual project page */}
      <Link to={`/projects/${project.id}`} className="view-project-link">
        View Project
      </Link>
    </div>
  );
}

export default ProjectCard;
