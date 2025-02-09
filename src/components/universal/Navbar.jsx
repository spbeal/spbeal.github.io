
import React, {useState} from 'react'
import Logo from '../../assets/2023-2024/SB nice color.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
//import {Link} from 'react-scroll'

import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-almond-700 ">
      {/* <div className="fixed px-4 bg-[#0a192f] text-gray-300"> */}
       <div>
        <nav>
            <Link to="/" smooth={true} duration={500} >
              <img src={Logo} alt="Logo" style={{ width: "60px" }} />                
          </Link>
        </nav>
        </div>
        
        {/* menu */}
          <nav>
           <ul className='hidden md:flex text-lg mx-2 gap-x-5 cursor-pointer'>
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

              {/* <li>
                <a href='https://sambeal.dev/portfolio/' className="hover:text-blue-500"> Portfolio</a>
                </li> */}
            </ul>
          </nav>

        {/* Hamburger */} 
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes/>}
        </div>

         {/* Mobile menu */}
         <ul className = {
          !nav 
          ? 'hidden' 
          : ' absolute top-0 left-0 w-full h-screen bg-almond-700 flex flex-col justify-center items-center'
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

              {/* <li className='py-6 text-4xl'>
                <a href='https://sambeal.dev/portfolio/' className="hover:text-blue-500"> Portfolio</a>
                </li> */}
         </ul>
    </div>
  )
}

export default Navbar