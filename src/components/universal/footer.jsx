import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom";
import Resume from "../../assets/resume-10-15.pdf";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
        <footer className="relative px-4 pb-8 pt-4">
            <div className="page-container">
                <div className="surface-card rounded-[28px] px-6 py-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="text-left">
                            <p className="text-sm font-bold uppercase tracking-[0.28em] text-pink-600">Samuel Beal</p>
                            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                                Associate Software Engineer focused on building practical full-stack software.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-slate-700">
                            <a className="rounded-full border border-slate-200 bg-white/80 p-3 hover:-translate-y-0.5 hover:text-pink-600" href="https://www.linkedin.com/in/samuelbeal/">
                                <FaLinkedin size={22} />
                            </a>
                            <a className="rounded-full border border-slate-200 bg-white/80 p-3 hover:-translate-y-0.5 hover:text-pink-600" href="https://github.com/spbeal">
                                <FaGithub size={22} />
                            </a>
                            <Link className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:text-pink-600" to="/contact">
                                Contact
                            </Link>
                            <a className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:text-pink-600" href={Resume} download="Samuel_Beal_Resume.pdf">
                                Resume
                            </a>
                        </div>
                    </div>

                    <p className='mt-6 text-sm text-slate-500'>
                        © {currentYear} All rights reserved by <strong>Samuel Beal</strong>
                    </p>
                </div>
            </div>
        </footer>
  );
};
  
export default Footer