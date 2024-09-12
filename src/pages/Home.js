import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fireBack from '../assets/3d-cartoon-night-sky.jpg';
import About from './About';
import Projects from './Projects';
import ContactForm from '../components/ContactForm'; // Import the contact form
import Header from '../components/Header';
import SkillsChart from '../components/SkillsChart'; // Skills Chart Component

import '../styles/home.css';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    // GSAP ScrollTrigger animations for each section
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,  // Increase duration for smoother animation
        ease: "power3.out",  // Smooth easing
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Animation starts when the section is in view
          end: "bottom 20%", // Ends before leaving the viewport
          toggleActions: "play none none reverse",  // Trigger actions on scroll
        },
      });
    });
  }, []);

  return (
    <div>
      <Header />

      {/* Parallax Background */}
      <Parallax bgImage={fireBack} strength={90} className="parallax-fullpage">
        
        {/* Home Section */}
        <section className="section" id="home">
          <h1>Hey, I'm Anthony Barbaro</h1>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <Projects />
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <h1>My Skills</h1>
          <SkillsChart /> {/* Animated Skills Chart */}
        </section>

        {/* Contact Form Section */}
        <section className="section" id="contact">
          <ContactForm />
        </section>

      </Parallax>
    </div>
  );
}

export default Home;
