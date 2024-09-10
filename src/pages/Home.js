import React from 'react';
import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import fireBack from '../assets/3d-cartoon-night-sky.jpg';
import About from './About';
import Projects from './Projects';
import ContactForm from '../components/ContactForm'; // Import the contact form
import Header from '../components/Header';

import '../styles/home.css';

function Home() {
  const [homeRef, homeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const fadeInContact = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 30 },
  });

  return (
    <div>
      <Header />

      <Parallax bgImage={fireBack} strength={90} className="parallax-fullpage">
        <animated.section className="section" id="home" style={fadeInFromTop} ref={homeRef}>
          <h1>Hey, I'm Anthony Barbaro</h1>
        </animated.section>

        <animated.section className="section" id="about" style={fadeInFromLeft} ref={aboutRef}>
          <About />
        </animated.section>

        <animated.section className="section" id="projects" style={fadeInFromRight} ref={projectsRef}>
          <Projects />
        </animated.section>

        {/* Contact Form Section */}
        <animated.section className="section" id="contact" style={fadeInContact} ref={contactRef}>
          <ContactForm />
        </animated.section>
      </Parallax>
    </div>
  );
}

export default Home;
