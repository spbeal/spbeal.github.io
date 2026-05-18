
import { useEffect, useState } from 'react';
import Logo from '../../assets/2023-2024/SB nice color.png'
import {FaBars, FaTimes, FaCloudMoon, FaCloudSun} from "react-icons/fa"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [darkMode, setDarkMode] = useState(
      document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };

  return (
    <div className="shadow-sm shadow-[#040c16] bg-gray-800 text-white  fixed w-full h-[80px] justify-between flex items-center px-4 z-50">
      {/* <div className="fixed px-4 bg-[#0a192f] text-gray-300"> */}
      
       <div className=''>
        <nav>
            <Link to="/">
              <img src={Logo} alt="Logo" style={{ width: "60px" }} />                
          </Link>
        </nav>
        </div>


        {/* menu */}
        <div className="">
          <nav>
           <ul className='hidden md:flex text-lg mx-2 gap-x-5 cursor-pointer  '>
              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/">
                Home
                </Link>
              </li>

              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/about">
                About
                </Link>
              </li>
              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/experience">
                Experience
                </Link>
              </li> 

              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/blog">
                Blog
                </Link>
              </li> {/* Could combine About with Contact */}

              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/projects">
                Projects
                </Link>
              </li> 

              <li className='block text-lg px-4 py-2 hover:bg-gray-700 rounded-lg '>
                <Link to="/portfolio">
                Portfolio
                </Link>
              </li> 
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
          : ' absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center '
          }
        >
            <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
            <Link onClick={handleClick} to="/">
                Home
              </Link>
            </li>

            <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
            <Link onClick={handleClick} to="/about">
                About
              </Link>
            </li>

            <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
            <Link onClick={handleClick} to="/experience">
                Experience
              </Link>
            </li> 

            <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
            <Link onClick={handleClick} to="/projects">
                Projects
              </Link>
              </li> 

              <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
              <Link onClick={handleClick} to="/blog">
                Blog
              </Link>
              </li> 

              <li className='py-6 text-4xl block  px-4  hover:bg-gray-700 rounded-lg'>
              <Link onClick={handleClick} to="/portfolio">
                Portfolio
              </Link>
              </li> 
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