import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full md:text-center'>
        <h1 className='text-4xl text-7x1 font-bold text-[#ccd6f6] sm:block border-b-4 border-pink-600'>Samuel Beal</h1>

        <div className=''>
        <p className=" mt-2 mb-3 text-2xl pt-1 font-extrabold tracking-tight text-text-color sm:text-4xl flex">
        <p className=" hidden md:block whitespace-nowrap text-3xl font-extrabold text-stone-300">&lt;<span className="font-extrabold text-xl text-pink-600">div</span>&gt;
        <span className="text-2xl mx-2 font-extrabold leading-7 text-stone-400">I build</span></p>
        <p className=" hidden md:block text-xs pt-3 mx-5 font-black tracking-wide text-stone-300">
        <TypeAnimation
                  
          sequence={[
          'Websites',
            1000,
          'Small Games',
            1000,
          'Quality of Life Applications',
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
        <p className='leading-8 text-[#8892b0] py-2 max-w-[700px]'> 2.5 year Computer Science Student at University of Idaho. I am actively learning in C++ collaborating on
          various projects with peers to expand my expertise. </p>

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

{/*
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div>
           <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
           <p className='py-4 '> // These are some of the technologies I've worked with </p>
       </div>

        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
                <p className='py-4 '> // These are some of the technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Cplusplus} alt="C++ icon"/>
                    <p className='my-4'>C++</p>
                </div> 
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon"/>
                    <p className='my-4'>Javascript</p>
                </div>
            </div>
        </div>
*/}