import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data';
import '../styles/projects.css';

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects (Updated)</h2>
      <div className="projects-list">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
