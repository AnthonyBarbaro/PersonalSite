import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import projectBackground from '../assets/3d-cartoon-night-sky.jpg'; 
import projectData from '../data';  
import Header from '../components/Header'; // Import the common Header component

import '../styles/projectPage.css'; 

function ProjectPage() {
  const { id } = useParams();  
  const selectedProject = projectData.find((project) => project.id === parseInt(id));  

  // InView hooks for animation triggers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // React Spring animations
  const fadeInFromTop = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0)' : 'translateY(-50px)',
    config: { tension: 200, friction: 30 },
  });

  const fadeInFromLeft = useSpring({
    opacity: detailsInView ? 1 : 0,
    transform: detailsInView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 200, friction: 30 },
  });

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  if (!selectedProject) {
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <Header /> {/* Reuse the common Header component */}
      
      {/* Parallax Background */}
      <Parallax bgImage={projectBackground} strength={70} className="parallax-fullpage">
        <animated.section className="project-page" id="project-header" style={fadeInFromTop} ref={headerRef}>
          <h1>{selectedProject.title}</h1>  
        </animated.section>

        {/* Conditionally render the video or a message */}
        {selectedProject.videoUrl ? (
          <div className="video-container">
            <iframe
              src={selectedProject.videoUrl}  
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Project Video"
            ></iframe>
          </div>
        ) : (
          <p>No video available for this project.</p>
        )}

        <animated.section className="github-details" id="github-details" style={fadeInFromLeft} ref={detailsRef}>
          <h2>GitHub Repository</h2>
          <p>{selectedProject.description}</p>
          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="back-button">
            View GitHub Repo
          </a>
        </animated.section>
      </Parallax>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑ Back to Top
      </div>
    </div>
  );
}

export default ProjectPage;
