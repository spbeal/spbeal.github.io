import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
{/* #42BD97  #0a192f*/}
const Home = () => {
  return ( 
    <div name='home' className='w-full h-screen bg-[#0a192f]'> 

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full '>
        <h1 className='text-4xl text-7x1 font-bold text-[#ccd6f6] sm:block border-b-4 border-pink-600'>Samuel Beal</h1>

        <div className=''>
        <p className=" mt-2 mb-3 text-2xl pt-1 font-extrabold tracking-tight text-text-color sm:text-4xl flex">
        <p className=" hidden md:block whitespace-nowrap text-3xl font-extrabold text-stone-300">&lt;<span className="font-extrabold text-xl text-pink-600">div</span>&gt;
        {/* <span className="text-2xl mx-2 font-extrabold leading-7 text-stone-400">I build</span></p> */}
        <span className="text-2xl mx-2 font-extrabold leading-7 text-[]">I build</span></p>
        <p className=" hidden md:block text-xs pt-3 font-black tracking-wide text-stone-300">
        <TypeAnimation
                  
          sequence={[
          'Quality of Life Applications',
            1000,
          'Websites',
            1000,
          'Small Games',
            1000,
          'Any and All Things!',
            1000
        ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          />
        </p>

        <p className=" hidden md:block text-2xl font-bold pt-1 text-stone-300 ">&lt;/<span className="text-xl pt-1 font-extrabold text-pink-600">div</span>&gt;</p>
      </p>
    </div>
        <p className='hidden md:block text-center text-lg leading-8 text-[#8892b0] py-2 max-w-[700px] '> 
        I am a Computer Science Student at University of Idaho. 
        Experienced in C++, basic python, and basic web development. When I'm not studying, 
        I am out with friends, playing water polo, or programming a new project 
         </p>

         <p className='md:hidden text-xl leading-8 text-[#8892b0] py-2 max-w-[700px]'> 
        I am a Computer Science Student at University of Idaho. 
        Experienced in C++, basic python, and basic web development. When I'm not studying, 
        I am out with friends, playing water polo, or programming a new project 
         </p>

          {/* Social icons */}
          <div className='py-4 grid grid-cols-2 text-4xl font-bold inline text-gray-300'>
            <div className='mx-3 '>
            <a className='' 
              href="https://www.linkedin.com/in/samuelbeal/">
                <FaLinkedin size={30}/>
              </a>
            </div>
            <div className='mx-3 '>
            <a className='' 
              href="https://github.com/spbeal">
                <FaGithub size={30}/>
              </a>
              {/**
              <div className='mx-3 '>
            <a className='' 
              href='/resume'>
                <BsFillPersonLinesFill size={30}/>
              </a>
            </div>
               */}
            </div>
          </div>


      </div>
    </div>
  )
}

export default Home

