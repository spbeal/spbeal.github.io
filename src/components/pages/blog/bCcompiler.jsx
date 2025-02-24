import React from 'react'
import Uidaho from '../../../assets/2023-2024/universityofidaho.png'
import GRC from '../../../assets/2023-2024/Green River College.jpg'

const bCcompiler = () => {
  return (
    <div name='education' className='w-full min-h-screen'>
{/*Container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Education</p>
              <ul className='hidden md:block text-lg'>
                <li className='py-8 grid grid-cols-4'>
                <img className='w-20' src={Uidaho} alt="University of Idaho icon"/>
                <li>
                <p className='font-bold'>University of Idaho</p>
                <p className='py-1'>Computer Science</p>
                </li>
                <p className='mx-auto'> 2023-2025 
                <p className='mx-auto py-1'>GPA: 3.79/4.0</p>
                </p>
                </li>

                <li className='py-8 grid grid-cols-4'>
                <img className='w-20' src={GRC} alt="Green River College icon"/>
                  <li>
                  <p className='font-bold'>Green River College</p>
                  <p className='py-1'>Associate in Arts</p>
                  </li>
                  <p className='mx-auto'> 2021-2023 
                  <p className='py-1'>GPA: 4.0/4.0</p>
                  </p>
                </li>
              </ul>
            </div>


          {/* MOBILE */}
          <div className='md:hidden text-xl'>
              <ul>
                <li className='py-8 grid grid-cols-3'>
                <img className='w-20 ' src={Uidaho} alt="University of Idaho icon"/>
                <li className=''>
                <p className='font-bold'>University of Idaho</p>
                <p className='py-1'>Computer Science</p>
                <p className='mx-auto'> 2023 - 2025 </p>
                <p className='mx-auto py-1'>GPA: N/A</p>

                </li>
                </li>

                <li className='py-8 grid grid-cols-3'>
                <img className=' w-20' src={GRC} alt="Green River College icon"/>
                <li>
                <p className='font-bold'>Green River College</p>
                <p className='py-1'>Associate in Arts</p>
                <p className='mx-auto  '> 2021 - 2023 </p>
                <p className='mx-auto py-1'>GPA: 4.0/4.0</p>

                </li>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default bCcompiler
