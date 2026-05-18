import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import SamBlob from "../../../assets/Snapchat-sam2.jpg";

const focusTags = ["React", "TypeScript", "Golang", "PureScript", "Python", "Product-minded systems"];

const HomeMain = () => {
  return (
    <div name="home_main" className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-10">
      <Helmet>
        <title>Home - Samuel</title>
      </Helmet>

      <div className="page-container">
        <div className="surface-card soft-grid rounded-[36px] px-8 py-10 sm:px-12 sm:py-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="text-center lg:text-left">
              <span className="section-eyebrow">Samuel Beal</span>
              <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 sm:text-6xl">
                Software Engineer building reliable, scalable systems.
              </h1>
              <p className="section-copy max-w-2xl lg:mx-0">
                I am an Associate Software Engineer @ SEL who graduated from the University of
                Idaho in Computer Science with a certificate in AI/ML. I enjoy building full-stack
                projects using React, TS/JS, Golang, PureScript, Python, C++, C#, and SQL-backed
                systems. When I am not working, I am usually out with friends, swing dancing,
                playing rugby or water polo, or programming a new project.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  to="/projects"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-300/40 "
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-slate-600 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 hover:-translate-y-0.5"
                >
                 Contact Me
                </Link>
              </div>

              <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                <a href="https://www.linkedin.com/in/samuelbeal/" className="rounded-full border border-slate-200 bg-white/80 p-3 text-blue-600 shadow-sm hover:-translate-y-0.5 hover:text-blue-800">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/spbeal" className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-800 shadow-sm hover:-translate-y-0.5 hover:text-pink-600">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[390px]">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-amber-200/70 via-white/40 to-pink-300/60 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/60 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.18)]">
                <img className="h-full w-full rounded-[28px] object-cover" src={SamBlob} alt="Samuel Beal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
