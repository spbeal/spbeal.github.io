import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Element } from 'react-scroll';
import HomeSection from './combine/HomeMain';
import AboutSection from './About';
import ProjectsSection from './Projects';
import ContactSection from './Contact';
import MiniNav from '../universal/MiniNav';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MiniNav />

      <Helmet>
        <title>Portfolio - Samuel</title>
      </Helmet>

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
    </div>
  );
};

export default Portfolio;