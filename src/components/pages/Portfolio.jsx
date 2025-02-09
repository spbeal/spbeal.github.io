// Portfolio.js
import React from 'react';
import { useEffect } from "react";
import { Element } from 'react-scroll'; // Import from react-scroll
import HomeSection from './Home';
import AboutSection from './About';
import ProjectsSection from './Projects';
import ContactSection from './Contact';
import MiniNav from '../universal/MiniNav';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Runs once when the component mounts

  return (
    <div>
      <MiniNav />
      

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="projects">
        <ProjectsSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </div>
  );
};

export default Portfolio;