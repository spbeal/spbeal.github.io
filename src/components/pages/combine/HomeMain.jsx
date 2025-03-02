import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import SamBlob from "../../../assets/2023-2024/blobimageofme.png";
//import SamBlob from "../../../assets/Snapchat-sam1.jpg";
import SamBlob from "../../../assets/Snapchat-sam2.jpg";

const HomeMain = () => {
  return (
    <div name="home_main" className="w-full min-h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Home - Samuel</title>
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-16 py-32 flex flex-col-reverse lg:flex-row items-center gap-12 justify-center">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-2xl">
          {/* <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Samuel Beal
          </h1> */}
          <div className="">
          <p className="text-5xl font-extrabold inline leading-tight border-pink-600">
           Samuel Beal
          </p>
        </div>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I am a Computer Science Student at the University of Idaho. 
            Experienced in developing full-stack projects using technologies like C++, C#, Python, React, and MySQL.
            When I'm not studying, I am out with friends, swing dancing, playing rugby, water polo, 
            or programming a new project.
          </p>
          
          {/* Social icons */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/samuelbeal/" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={35} />
            </a>
            <a href="https://github.com/spbeal" className="text-gray-900 hover:text-gray-700">
              <FaGithub size={35} />
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-72 h-72 lg:w-80 lg:h-80 flex-shrink-0">
          <img className="w-full h-full object-cover rounded-full shadow-lg" src={SamBlob} alt="Samuel Beal" />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
