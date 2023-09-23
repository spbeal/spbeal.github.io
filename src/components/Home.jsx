import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, I am </p>
        <h1 className='text-4xl sm:text-7x1 font-bold text-[#ccd6f6]'>Samuel Beal</h1>
        <h2 className='text-3xl sm:text-7x1 py-2 font-bold text-[#8892b0]'>I'm a CS student at University of Idaho</h2>
        <p className='text-[#8892b0] py-2 max-w-[700px]'> I'm a computer science student actively learning in C++. I am currently collaborating on
          various projects to expand my expertise. </p>
          
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700'> View Work 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-2'/>        
        </span>
        </button>
      </div>

      </div>
    </div>
  )
}

export default Home