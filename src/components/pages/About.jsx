import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SamBlob from "../../assets/Snapchat-sam1.jpg";

import Education from "./combine/Education";
import Skills from "./combine/Skills";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen page-shell">
      <Helmet>
        <title>About - Samuel</title>
      </Helmet>
      <div className="page-container py-32">
        <div className="surface-card rounded-[32px] p-8 lg:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <span className="section-eyebrow">About</span>
              <h1 className="section-title">Samuel Beal</h1>
              <p className="section-copy max-w-2xl text-center lg:text-left">
                I am an Associate Software Engineer at SEL with a strong interest in
                building software that feels valuable the moment someone touches it. I enjoy
                moving between frontend product work, backend systems, automation, and the
                engineering details that make an application reliable and easy to use.
              </p>

              <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                <a href="https://www.linkedin.com/in/samuelbeal/" 
                  className="rounded-full border border-slate-200 bg-white/80 p-3 text-blue-600 shadow-sm hover:-translate-y-0.5 hover:text-blue-800 transition-colors duration-300">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/spbeal" 
                  className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-800 shadow-sm hover:-translate-y-0.5 hover:text-pink-600 transition-colors duration-300">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>

            <div className="mx-auto w-64 h-64 rounded-[30px] border border-white/70 bg-white/60 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.15)]">
              <img className="w-full h-full object-cover rounded-[24px] shadow-xl 
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