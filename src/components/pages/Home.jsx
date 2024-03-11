import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Sam from "../../assets/Good pfp.jpg";
import SamBlob from "../../assets/blobimageofme.png";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
{
  /* #42BD97  #0a192f*/
}
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-almond">
      {/* Container */}
      <div className="w-full mx-auto px-8 flex flex-col items-center justify-center h-full text-xl leading-8">
        <div className="hidden sm:block">
          <div className=" grid grid-cols-2">
            <div>
              <h1 className=" text-4xl font-bold sm:block underline decoration-pink-600 underline-offset-4 ">
                Samuel Beal
              </h1>
              <p className="text-left text-xl leading-8 py-2 max-w-[400px] ">
                I am a Computer Science Student at University of Idaho.
                Experienced in C++, basic python, and basic web development.
                When I'm not studying, I am out with friends, playing water
                polo, or programming a new project
              </p>

              {/* Social icons */}
              <div className="py-4 grid grid-cols-6 space-x-0">
                <div className="pl-4">
                  <a
                    className=""
                    href="https://www.linkedin.com/in/samuelbeal/"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <div className="">
                  <a className="" href="https://github.com/spbeal">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
            <img className=" pl-6 h-72" src={SamBlob} alt="Me"></img>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden">
          <div>
            <div className="">
              <img className="h-72 mx-auto " src={SamBlob} alt="Me"></img>
            </div>

            <h1 className=" text-4xl font-bold underline decoration-pink-600 underline-offset-4 ">
              Samuel Beal
            </h1>
            <p className=" text-xl leading-8 py-2 max-w-[700px]">
              I am a Computer Science Student at University of Idaho.
              Experienced in C++, basic python, and basic web development. When
              I'm not studying, I am out with friends, playing water polo, or
              programming a new project
            </p>

            {/* Social icons */}
            <div className="py-4 grid grid-cols-12 space-x-0">
              <div className="pl-4">
                <a className="" href="https://www.linkedin.com/in/samuelbeal/">
                  <FaLinkedin size={30} />
                </a>
              </div>
              <div className="sm:hidden space-x-0"></div>
              <div className="">
                <a className="" href="https://github.com/spbeal">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
