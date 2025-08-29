
import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
// import Contact from "../pages/Contact";
import { Link } from "react-router-dom";
import Resume from "../../assets/resume.pdf";
// import ResumeViewer from '../resume';

const Footer = () => {
  return (
        <div className=''>
        <div name="footer " className="shadow-md shadow-[#040c16] bg-gray-800 dark:bg-universal-dark100 z-50" style={styles.footer}>
        {/* Container */}
        
            <div className="leading-8 text-white">
                <div className="text-lg hidden sm:block">
                    <div className="justify-center">
                        {/* Social icons */}
                        <div className="flex py-4 space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/samuelbeal/">
                                <FaLinkedin size={30} />
                            </a>
                            <a className="" href="https://github.com/spbeal">
                                <FaGithub size={30} />
                            </a>
                            <nav>
                                <ul className='flex text-lg mx-2 gap-x-5 cursor-pointer'>
                                    {/* <li>
                                    <Link to="/portfolio" smooth={true} duration={500} >
                                    Portfolio
                                    </Link>
                                    </li>  */}
                    
                                    <li>
                                    <Link to="/contact" smooth={true} duration={500} >
                                    Contact Me
                                    </Link>
                                    </li> 
                                    {/* <li>
                                    <Link to="/resources/resume.pdf" smooth={true} duration={500} >
                                    Resume
                                    </Link>
                                    </li>  */}
                                    <li>
                                    <a href={Resume} download="My_Resume.pdf">
                                        Resume
                                    </a>
                                    </li> 
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <p className='text-center pb-2'>
                            © 2025 All rights reserved by <strong>Samuel Beal</strong>
                    </p>
                </div>
            </div>            
            {/* Mobile */}
            <div className="sm:hidden text-white">
                <div>
                    {/* Social icons */}
                    <div className="py-4 flex justify-center space-x-4">
                        <a className="" href="https://www.linkedin.com/in/samuelbeal/">
                            <FaLinkedin size={30} />
                        </a>
                        <a className="" href="https://github.com/spbeal">
                            <FaGithub size={30} />
                        </a>
                            <nav>
                            <ul className='flex text-lg mx-2 gap-x-5 cursor-pointer'>
                
                                <li>
                                <Link to="/contact" smooth={true} duration={500} >
                                Contact
                                </Link>
                                </li> 
                                <li>
                                <a href={Resume} download="My_Resume.pdf">
                                    Resume
                                </a>
                                </li> 
                            </ul>
                        </nav>
                    </div>
                    <p className='text-sm text-center'>
                        © 2025 All rights reserved by <strong>Samuel Beal</strong>
                    </p>
                </div>
            </div>

        </div>
        </div>
  );
};

const styles = {
    footer: {
      textAlign: 'center',
      padding: '10px',
      //backgroundColor: '#f1f1f1',
    //   position: 'fixed',
      bottom: 0,
      width: '100%',
      fontSize: '14px',
      color: '#333',
    },
  };
  
export default Footer