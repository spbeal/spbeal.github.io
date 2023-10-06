import React from 'react'

import HTML from '../../assets/html.png';
import CSS from '../../assets/html.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/html.png';
import AWS from '../../assets/html.png';
import GitHub from '../../assets/html.png';
import TailWind from '../../assets/html.png';
import Mongo from '../../assets/html.png';

import Cplusplus from '../../assets/c++.png';
import PythonImg from '../../assets/python.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       {/*Container */}
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
                {/** 
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={PythonImg} alt="Python icon"/>
                    <p className=''>Python</p>
                </div> 
                */}
            </div>
        </div>
    </div>
  )
}

export default Skills
