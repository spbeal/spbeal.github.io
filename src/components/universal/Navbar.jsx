
import React, {useState, useEffect} from 'react'
import Logo from '../../assets/2023-2024/SB nice color.png'
import {FaBars, FaTimes, FaCloudMoon, FaCloudSun} from "react-icons/fa"
//import {Link} from 'react-scroll'

import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    useEffect(() => {
      const button = document.getElementById("darkModeToggle");
  
      if (button) {
        button.addEventListener("click", toggleDarkMode);
      }
  
      return () => {
        if (button) {
          button.removeEventListener("click", toggleDarkMode);
        }
      };
    }, []);

    const [darkMode, setDarkMode] = useState(
      document.documentElement.classList.contains("dark")
    );
    useEffect(() => {
      if (darkMode) {
        //document.documentElement.classList.add("dark");
      } else {
        //document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };
    // const toggleDarkMode = () => {
    //   document.documentElement.classList.toggle("dark");
    // };

  return (
    <div className="shadow-sm shadow-[#040c16] bg-universal-100 dark:bg-universal-dark100 fixed w-full h-[80px] justify-between flex items-center px-4 z-50">
      {/* <div className="fixed px-4 bg-[#0a192f] text-gray-300"> */}
      
       <div className=''>
        <nav>
            <Link to="/" smooth={true} duration={500} >
              <img src={Logo} alt="Logo" style={{ width: "60px" }} />                
          </Link>
        </nav>
        </div>


        {/* menu */}
        <div className="">
          <nav>
           <ul className='hidden md:flex text-lg mx-2 gap-x-5 cursor-pointer '>
              <li>
                <Link to="/" smooth={true} duration={500} >
                Home
                </Link>
              </li>

              <li>
                <Link to="/about" smooth={true} duration={500} >
                About
                </Link>
              </li>

              <li>
                <Link to="/blog" smooth={true} duration={500} >
                Blog
                </Link>
              </li> {/* Could combine About with Contact */}

              <li>
                <Link to="/projects" smooth={true} duration={500} >
                Projects
                </Link>
              </li> 

              <li>
                <Link to="/portfolio" smooth={true} duration={500} >
                Portfolio
                </Link>
              </li> 

              {/* <li>
                <a href='https://sambeal.dev/portfolio/' className="hover:text-blue-500"> Portfolio</a>
                </li> */}
            </ul>
          </nav>

        {/* Hamburger */} 
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars className="w-12 h-8"/> : <FaTimes className="w-12 h-8"/>}
        </div>

         {/* Mobile menu */}
         <ul className = {
          !nav 
          ? 'hidden' 
          : ' absolute top-0 left-0 w-full h-screen bg-universal flex flex-col justify-center items-center'
          }
        >
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/" smooth={true} duration={500} >
                Home
              </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/about" smooth={true} duration={500} >
                About
              </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/projects" smooth={true} duration={500} >
                Projects
              </Link>
              </li> 

              <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/blog" smooth={true} duration={500} >
                Blog
              </Link>
              </li> 

              <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/portfolio" smooth={true} duration={500} >
                Portfolio
              </Link>
              </li> 

              {/* <li className='py-6 text-4xl'>
                <a href='https://sambeal.dev/portfolio/' className="hover:text-blue-500"> Portfolio</a>
                </li> */}
         </ul>
         </div>

         <div onClick={toggleDarkMode} className="cursor-pointer  ">
        {darkMode ? (
          <FaCloudMoon className="w-12 h-12 text-gray-600" />
        ) : (
          <FaCloudSun className="w-12 h-12 text-yellow-400" />
        )}
      </div>

    </div>
  )
}

export default Navbar