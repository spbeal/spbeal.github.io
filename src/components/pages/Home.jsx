import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'
import Sam from '../../assets/Good pfp.jpg'
import SamBlob from '../../assets/blobimageofme.png'

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
{/* #42BD97  #0a192f*/}
const Home = () => {
  return ( 
    <div name='home' className='w-full h-screen bg-almond'> 

      {/* Container */}
      <div className='max-w-[1000px] grid grid-cols-2  mx-auto px-8 flex flex-col justify-left items-center h-full text-xl leading-8'>

      <div>
        <h1 className='text-4xl font-bold sm:block border-b-4 border-pink-600'>Samuel Beal</h1>
        <p className='hidden md:block text-left text-xl leading-8  py-2 max-w-[700px] '> 
        I am a Computer Science Student at University of Idaho. 
        Experienced in C++, basic python, and basic web development. When I'm not studying, 
        I am out with friends, playing water polo, or programming a new project 
         </p>

         <p className='md:hidden text-xl leading-8 py-2 max-w-[700px]'> 
        I am a Computer Science Student at University of Idaho. 
        Experienced in C++, basic python, and basic web development. When I'm not studying, 
        I am out with friends, playing water polo, or programming a new project 
         </p>


         <p classname=''>
            My portfolio is at
           <a href='https://sambeal.dev/portfolio/'> sambeal.dev/portfolio</a>
        </p>


          {/* Social icons */}
          <div className='py-4 grid grid-cols-2 text-4xl font-bold'>
            <div className='mx-3 '>
            <a className='' 
              href="https://www.linkedin.com/in/samuelbeal/">
                <FaLinkedin size={30}/>
              </a>
            </div>
            <div className='mx-3'>
            <a className='' 
              href="https://github.com/spbeal">
                <FaGithub size={30}/>
              </a>
            </div>
          </div>

         </div>
    
        <div className=''>
          <img 
          className='h-72 mx-auto' 
          src={SamBlob} 
          alt='Me'>
          </img>
        </div>

      </div>
    </div>
  )
}

export default Home

