import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p>Hi, I am </p>
        <h1>Samuel Beal</h1>
        <h2>I'm a comp sci student at University of Idaho</h2>
        <p> I'm a computer science student specializing in c++. I am currently building 
          projects in c++ to expand my expertise and get real world experience. </p>
          
      <div>
        <p>--------------------------------------------------------------------------- </p>
        <button> View Work <HiArrowNarrowRight /></button>
      </div>

      </div>
    </div>
  )
}

export default Home