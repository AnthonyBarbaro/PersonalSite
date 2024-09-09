import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../styles/home.css';
import fireBack from '../assets/3d-cartoon-night-sky.jpg';

// Import the About and Projects components
import About from './About';
import Projects from './Projects';

function Home() {
  // Intersection observer hooks for detecting when sections are in view
  const [homeRef, homeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // React Spring animations for fade-in effect
  const fadeInFromTop = useSpring({
    opacity: homeInView ? 1 : 0,
    transform: homeInView ? 'translateY(0)' : 'translateY(-50px)',
    config: { tension: 200, friction: 30 },
  });

  const fadeInFromLeft = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 200, friction: 30 },
  });

  const fadeInFromRight = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translateX(0)' : 'translateX(50px)',
    config: { tension: 200, friction: 30 },
  });

  return (
    <div>
      {/* Fixed Navigation with Scroll Links */}
      <header className="nav-header">
        <nav>
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                offset={-50}
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Parallax Background for the entire page */}
      <Parallax bgImage={fireBack} strength={70} className="parallax-fullpage">
        {/* Home Section with Fade-in Animation */}
        <animated.section className="section" id="home" style={fadeInFromTop} ref={homeRef}>
          <h1>Hey, I'm Anthony Barbaro</h1>
        </animated.section>

        {/* About Section with Slide-in from Left Animation */}
        <animated.section className="section" id="about" style={fadeInFromLeft} ref={aboutRef}>
          <About />
        </animated.section>

        {/* Projects Section with Slide-in from Right Animation */}
        <animated.section className="section" id="projects" style={fadeInFromRight} ref={projectsRef}>
          <Projects />
        </animated.section>
      </Parallax>
    </div>
  );
}

export default Home;
