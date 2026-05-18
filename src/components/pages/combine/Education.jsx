import React from 'react';
import Uidaho from '../../../assets/2023-2024/universityofidaho.png';
import GRC from '../../../assets/2023-2024/Green River College.jpg';

const educationData = [
  {
    school: 'University of Idaho',
    degree: 'Computer Science, AI/ML Certificate',
    years: '2023 - 2025',
    gpa: '3.8/4.0',
    image: Uidaho,
  },
  {
    school: 'Green River College',
    degree: 'Associate of Arts',
    years: '2021 - 2023',
    gpa: '4.0/4.0',
    image: GRC,
  }
];

const Education = () => {
  return (
    <div name='education' className='w-full py-16'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <span className='section-eyebrow'>Background</span>
        <h2 className='section-title'>Education</h2>
        <div className='mt-10 space-y-8'>
          {educationData.map((edu, index) => (
            <div key={index} className='surface-card flex flex-col gap-5 rounded-[28px] p-6 text-left transition-transform hover:-translate-y-1 md:flex-row md:items-center md:p-8'>
              <img className='h-24 w-24 rounded-2xl bg-white/80 object-contain p-3' src={edu.image} alt={`${edu.school} logo`} />
              <div className='md:ml-2 text-left'>
                <h3 className='text-2xl font-semibold text-slate-900'>{edu.school}</h3>
                <p className='text-lg text-slate-700'>{edu.degree}</p>
                <p className='text-slate-500'>{edu.years}</p>
                <p className='mt-2 inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700'>GPA: {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
