import React from "react";
import { Helmet } from "react-helmet";

import SamBlob from "../../assets/2023-2024/blobimageofme.png";

import Education from "./portfolio/Education";
import Skills from "./portfolio/Skills";

const About = () => {
  return (
    <div name="about" className="w-full">
      <Helmet>
        <title>About - Samuel</title>
      </Helmet>
      <div className="flex flex-col mx-auto p-4 justify-center items-center w-full h-full pt-12">
        {/* <div className="">
                <img className="h-72 mx-auto " src={SamBlob} alt="Me"></img>
          </div> */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-24">

          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Sam, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg ">
              I am a junior studying Computer Science
              at University of Idaho. During my free time I'm always looking for
              ways to further develop my abilities through building useful
              applications. Lately I have been building projects in C++ or
              Python.
            </p>
          </div>
          
        </div>
      </div>
      <Education></Education>
      <Skills></Skills>
    </div>
  );
};

export default About;
