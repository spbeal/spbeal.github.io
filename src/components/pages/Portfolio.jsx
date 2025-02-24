// Portfolio.js
import React from 'react';
import { Helmet } from "react-helmet";

import { useEffect } from "react";
import { Element } from 'react-scroll'; // Import from react-scroll
import HomeSection from './combine/HomeMain';
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
    <div className="bg-universal dark:bg-universal-dark">
      <MiniNav />
      <Element name="home">
        <HomeSection />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="projects">
        <ProjectsSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>

      <Helmet>
        <title>Portfolio - Samuel</title>
      </Helmet>
    </div>
    </div>
  );
};

export default Portfolio;