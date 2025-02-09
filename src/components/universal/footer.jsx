
import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <div name="footer " className=" bg-almond-700" style={styles.footer}>
        {/* Container */}
        
            <div className="text-lg leading-8 ">
                <div className="hidden sm:block">
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
                                    <li>
                                    <Link to="/portfolio" smooth={true} duration={500} >
                                    Portfolio
                                    </Link>
                                    </li> {/* Could combine About with Contact */}
                    
                                    <li>
                                    <Link to="/contact" smooth={true} duration={500} >
                                    Contact Me
                                    </Link>
                                    </li> 
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <p>
                            © 2025 All rights reserved by <strong>Samuel Beal</strong>
                    </p>
                </div>
            </div>            
            {/* Mobile */}
            <div className="sm:hidden">
                <div>
                    {/* Social icons */}
                    <div className="py-4 flex justify-center space-x-4">
                        <a className="" href="https://www.linkedin.com/in/samuelbeal/">
                            <FaLinkedin size={30} />
                        </a>
                        <a className="" href="https://github.com/spbeal">
                            <FaGithub size={30} />
                        </a>
                    </div>
                    <p>
                        © 2025 All rights reserved by <strong>Samuel Beal</strong>
                    </p>
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