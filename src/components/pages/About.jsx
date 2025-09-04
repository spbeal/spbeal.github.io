import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SamBlob from "../../assets/Snapchat-sam1.jpg";

import Education from "./combine/Education";
import Skills from "./combine/Skills";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen">
      <Helmet>
        <title>About - Samuel</title>
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-16 py-32 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl p-6">
          {/* Title Section */}
          <div className="text-center ">
            <p className="text-5xl font-extrabold inline-block leading-tight border-b-4 border-pink-600 pb-2 
               drop-shadow-lg">
              About Me
            </p>
          </div>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="flex-1">
              <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              I am an Associate Software Engineer @ SEL. I have a passion for
            building impactful applications and continuously expanding my skill set.
             Recently, I've been into investing and developing automated trading bots using AWS, Python, and ML. 
              </p>
              
              {/* Social Icons */}
              <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="https://www.linkedin.com/in/samuelbeal/" 
                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/spbeal" 
                   className="text-gray-900 hover:text-gray-700 transition-colors duration-300">
                  <FaGithub size={35} />
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-64 h-64 flex-shrink-0">
              <img className="w-full h-full object-cover rounded-full shadow-xl 
                hover:shadow-2xl transition-shadow duration-300" 
                src={SamBlob} 
                alt="Samuel Beal" />
            </div>
          </div>
        </div>
      </div>

      <Education />
      <Skills />
    </div>
  );
};

export default About;