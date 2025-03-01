import React from "react";
import { Helmet } from "react-helmet";

import Education from "./combine/Education";
import Skills from "./combine/Skills";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen ">
      <Helmet>
        <title>About - Samuel</title>
      </Helmet>
      <div className="w-full mx-auto px-8 flex flex-col items-center justify-center leading-8 pt-32 pb-32">
        <div className="w-full max-w-4xl p-6">
        <div className="pb-2 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-pink-600">
            About Me
          </p>
        </div>
          <p className=" rounded-lg shadow-gray-700 text-xl text-center leading-8 p-4 py-2 max-w-3xl mx-auto">
            I am a senior studying Computer Science at the University of Idaho. I have a passion for
            building impactful applications and continuously expanding my skill set. Recently, I’ve
            been working on projects in C and Python.
          </p>
        </div>
      </div>
      <Education />
      <Skills />
    </div>
  );
};

export default About;
