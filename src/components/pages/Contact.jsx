import React from 'react'
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
    <div name = 'contact' className='bg-universal dark:bg-universal-dark wfull min-h-screen flex justify-center items-center p-4 pt-24'>
      <Helmet>
        <title>Contact - Samuel</title>
        {/* shadow-md shadow-[#040c16] */}
      </Helmet>
        <form method='POST' action="https://getform.io/f/1575d85d-5d25-4d12-925b-8d0d2a4b407d" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
            <p className=' py-4 text-lg'> Submit the form below or send me an email --> sampbeal@gmail.com</p>
          </div>
          <input className='bg-universal-100 p-2 shadow-gray-300 shadow-sm border-2 border-gray-500' type="text" placeholder='Name' name='name' />
          <input className='bg-universal-100 my-4 p-2 shadow-sm shadow-gray-300 border-2 border-gray-500' type="email" placeholder='Email' name='email'/>
          <textarea className='bg-universal-100 p-2 shadow-sm shadow-gray-300 border-2 border-gray-500' name="message" rows="10" placeholder='Message'></textarea>
          <button className='border-gray-500 border-2 shadow-gray-300 shadow-sm hover:bg-universal-100 hover:border-pink-700 px-4 py-3 mx-auto flex items-center my-8 text-xl'>Let's Connect</button>
        </form>
    </div>
    </div>
  )
}

export default Contact