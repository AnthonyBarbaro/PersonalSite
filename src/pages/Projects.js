import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Ensure this component exists and works
import projectData from '../data'; // Import your project data from data.js
import '../styles/projects.css'; // Import your CSS styles for the Projects section

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
