import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data'; // Importing project data
import '../styles/projects.css';


function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
