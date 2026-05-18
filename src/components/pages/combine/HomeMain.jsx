import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SamBlob from "../../../assets/Snapchat-sam2.jpg";

const HomeMain = () => {
  return (
    <div name="home_main" className="w-full min-h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Home - Samuel</title>
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-16 py-32 flex flex-col-reverse lg:flex-row items-center gap-12 justify-center">
        <div className="text-center lg:text-left max-w-2xl">
          <div className="">
          <p className="text-5xl font-extrabold inline leading-tight border-pink-600">
           Samuel Beal
          </p>
        </div>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I am an Associate Software Engineer at SEL focused on building practical,
            reliable software across the stack. I graduated from the University of Idaho
            with a computer science degree and an AI/ML certificate, and I enjoy working
            across React, TypeScript, Go, PureScript, Python, C++, C#, and SQL-driven
            systems. Outside of work, I am usually swing dancing, playing rugby or water
            polo, spending time with friends, or building the next side project.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/samuelbeal/" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={35} />
            </a>
            <a href="https://github.com/spbeal" className="text-gray-900 hover:text-gray-700">
              <FaGithub size={35} />
            </a>
          </div>
        </div>

        <div className="w-72 h-72 lg:w-80 lg:h-80 flex-shrink-0">
          <img className="w-full h-full object-cover rounded-full shadow-lg" src={SamBlob} alt="Samuel Beal" />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
