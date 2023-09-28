import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full md:text-center'>
        <p className='text-pink-600'>Hi, I am </p>
        <h1 className='text-4xl text-7x1 font-bold text-[#ccd6f6]'>Samuel Beal</h1>

        <div className=''>
        <p className=" mt-2 mb-3 text-2xl pt-1 font-extrabold tracking-tight text-text-color sm:text-4xl flex">
        <p className=" whitespace-nowrap text-3xl font-extrabold text-stone-300">&lt;<span className="font-extrabold text-xl text-pink-600">div</span>&gt;
        <span className="text-2xl mx-2 font-extrabold leading-7 text-stone-400">I build</span></p>
        <p className=" text-xs pt-3 mx-5 font-black tracking-wide text-stone-300">
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

        <p className=" text-2xl font-bold pt-1 text-stone-300 ">&lt;/<span className="text-xl pt-1 font-extrabold text-pink-600">div</span>&gt;</p>
      </p>
    </div>
        <p className='leading-8 text-[#8892b0] py-2 max-w-[700px]'> I'm a 2.5 year computer science student at University of Idaho. I am actively learning in C++ collaborating on
          various projects with peers to expand my expertise. </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'> 
            <Link to="work" smooth={true} duration={500} >
                View Work
            </Link> 
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