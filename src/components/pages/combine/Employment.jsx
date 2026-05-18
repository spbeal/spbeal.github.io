import React from 'react';
import SELLogo from '../../../assets/60644576d213a1edd8b2507000d4f98a-4011923539.jpeg'; 
import UILogo from '../../../assets/2023-2024/universityofidaho.png';
import FOCLogo from '../../../assets/2023-2024/FOC-Logo.png';

const experienceData = [
  {
    title: 'Associate Software Engineer - R&D Products (Software Systems)',
    company: 'Schweitzer Engineering Laboratories',
    years: 'Jan 2025 – Present',
    description: [
      'Build full-stack, containerized applications for embedded systems with React, Vite, MUI, TypeScript/JavaScript, Golang, PostgreSQL, and OpenAPI.',
      'Delivered features in PureScript across established production applications.',
      'Refactored and migrated a large C# codebase into a Golang package for CRUD operations on Windows Structured Storage files (CFB format).',
      'Contributed to DTS, a custom Golang-based language developed with Nuclio.',
      'Write automation scripts that integrate with relays, REST APIs, network protocols, and authentication systems for customers such as Entergy and Southern Company.',
      'Design and deploy applications with Docker, Kubernetes, and Jenkins-based CI/CD pipelines.',
      'Collaborate in Agile teams through code reviews, sprint planning, release work, and cross-team delivery.',
    ],
    skills: [
      'React', 'Vite', 'MUI', 'TypeScript', 'JavaScript', 'Golang', 'PostgreSQL', 'OpenAPI', 'PureScript', 'C#', 'Docker', 'Kubernetes','CI/CD', 'REST APIs', 'Networking', 'Agile', 'Scrum'
    ],
    projects: [
      'Full-stack containerized embedded system app (React/MUI/TS/Go/PostgreSQL/OpenAPI)',
      'PureScript feature delivery for legacy and new apps',
      'C# to Golang migration for Windows Structured Storage (CFB)',
      'DTS language and automation scripts for relays and APIs',
      'CI/CD pipelines with Docker, Kubernetes, Jenkins',
    ],
    image: SELLogo,
  },
  {
    title: 'Web Developer Intern',
    company: 'Friends Of the Clearwater',
    years: 'Nov 2024 – Jan 2025',
    description: [
      'Built an embedded Stripe donation flow to reduce friction and improve the giving experience.',
      'Refreshed the site experience with cleaner layouts and newsletter signup features.',
    ],
    skills: ['WordPress', 'Stripe', 'PHP', 'JavaScript', 'HTML', 'CSS', 'UI/UX',],
    projects: [],
    image: FOCLogo,
  },
  {
    title: 'Academic Tutor',
    company: 'University of Idaho',
    years: 'Sep 2024 – Present',
    description: [
      'Supported students across computer science and related technical coursework.',
      'Strengthened my ability to adapt explanations to different learning styles and experience levels.',
    ],
    image: UILogo,
    skills: ['Communication', 'Composure', 'Adaptability'],
    projects: [],
  },
];

const Employment = () => {
  return (
    <div name='employment' className='w-full min-h-screen'>
      <div className="container mx-auto px-6 lg:px-16 py-32 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl p-6">
          <div className="text-center ">
            <p className="text-5xl font-extrabold inline-block leading-tight border-b-4 border-pink-600 pb-2 
               drop-shadow-lg">
              Experience
            </p>
          </div>
        <div className='mt-8 space-y-8'>
          {experienceData.map((exp, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center bg-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-100'>
              <img className='w-24 h-24 object-contain' src={exp.image} alt={`${exp.company} logo`} />
              <div className='md:ml-6 text-left'>
                <h2 className='text-2xl font-semibold'>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p className='text-lg text-gray-700'>{exp.years}</p>
                <div className='mt-4'>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4'>
                  <h4 className='text-lg font-semibold mb-2'>Skills:</h4>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Employment;
