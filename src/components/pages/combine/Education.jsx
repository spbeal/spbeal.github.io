import React from 'react';
import Uidaho from '../../../assets/2023-2024/universityofidaho.png';
import GRC from '../../../assets/2023-2024/Green River College.jpg';

const educationData = [
  {
    school: 'University of Idaho',
    degree: 'Computer Science with AI/ML Certificate',
    years: '2023 - 2025',
    gpa: '3.8/4.0',
    image: Uidaho,
  },
  {
    school: 'Green River College',
    degree: 'Associate in Arts',
    years: '2021 - 2023',
    gpa: '4.0/4.0',
    image: GRC,
  }
];

const Education = () => {
  return (
    <div name='education' className='w-full   py-16'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-extrabold text-gray-900 border-b-4 border-pink-600 inline-block'>
          Education
        </h2>
        <div className='mt-10 space-y-8'>
          {educationData.map((edu, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center bg-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105'>
              <img className='w-24 h-24 object-contain' src={edu.image} alt={`${edu.school} logo`} />
              <div className='md:ml-6 text-left'>
                <h3 className='text-2xl font-semibold'>{edu.school}</h3>
                <p className='text-lg text-gray-700'>{edu.degree}</p>
                <p className='text-gray-600'>{edu.years}</p>
                <p className='text-gray-600 font-medium'>GPA: {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
