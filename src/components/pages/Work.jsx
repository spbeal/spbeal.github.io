import React from 'react'
import WorkImg from '../../assets/projects/workImg.jpeg'
import realEstate from '../../assets/projects/realestate.jpg'
import goatFile from '../../assets/goats.jpeg'
import MazeOutput from '../../assets/Visual studio maze6.png'
// import DownloadsPic from '../../assets/2-folder-png-image-515033194.png'
import DownloadsPic from '../../assets/Cleandownloads.png'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 text-lg'>// Some of my recent work</p>
            </div>
            {/* Container */}
            <div className='text-center grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div 
                    style={{backgroundImage: `url(${DownloadsPic})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Clean Downloads Folder 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/spbeal/CleanDownloads">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                    </div>
                  </div>
                </div>
                <div 
                style = {{backgroundImage: `url(${goatFile})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Traversing a Maze
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="https://justjoeyo.github.io/Project-Website/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a> */}
                            <a href="https://github.com/spbeal/Maze-problem">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    
    </div>
  )
}

export default Work