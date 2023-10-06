import React from 'react'
import Uidaho from '../../assets/universityofidaho.png'
import GRC from '../../assets/10996469_web1_4002128_web1_logo-grc.jpg'

const Education = () => {
  return (
    <div name='education' className='wfull h-screen bg-[#0a192f] text-gray-300'>
{/*Container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Education</p>
              <ul className='hidden md:block'>
                <li className='py-8 grid grid-cols-4'>
                <img className='w-20' src={Uidaho} alt="University of Idaho icon"/>
                <li>
                <p className='font-bold'>University of Idaho</p>
                <p className='py-1'>Computer Science</p>
                </li>
                <p className='mx-auto'> 2023-2025 </p>
                </li>

                <li className='py-8 grid grid-cols-4'>
                <img className='w-20' src={GRC} alt="Green River College icon"/>
                <li>
                <p className='font-bold'>Green River College</p>
                <p className='py-1'>Associate in Arts</p>
                </li>
                <p className='mx-auto'> 2021-2023 </p>
                </li>
              </ul>
            </div>


          {/* MOBILE */}
          <div className='md:hidden'>
              <ul>
                <li className='py-8 grid grid-cols-3'>
                <img className='w-20 ' src={Uidaho} alt="University of Idaho icon"/>
                <li className=''>
                <p className='font-bold'>University of Idaho</p>
                <p className='py-1'>Computer Science</p>
                <p className='mx-auto'> 2023 - 2025 </p>

                </li>
                </li>

                <li className='py-8 grid grid-cols-3'>
                <img className=' w-20' src={GRC} alt="Green River College icon"/>
                <li>
                <p className='font-bold'>Green River College</p>
                <p className='py-1'>Associate in Arts</p>
                <p className='mx-auto py-1 '> 2021 - 2023 </p>

                </li>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Education
