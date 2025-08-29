import React from 'react';
import SELLogo from '../../../assets/60644576d213a1edd8b2507000d4f98a-4011923539.jpeg'; // Add relevant logos
// import EventSecurityLogo from '../../../assets/2023-2024/EventSecurityLogo.png';
// import TutorLogo from '../../../assets/2023-2024/TutorLogo.png';
// import LifeguardLogo from '../../../assets/2023-2024/LifeguardLogo.png';
// import WebDevLogo from '../../../assets/2023-2024/WebDevLogo.png';
import UILogo from '../../../assets/2023-2024/universityofidaho.png';
import FOCLogo from '../../../assets/2023-2024/FOC-Logo.png';

const experienceData = [
  {
    title: 'Associate Software Engineer - R&D Products (Software Systems)',
    company: 'Schweitzer Engineering Laboratories',
    years: 'Jan 2025 – Present',
    description: [
      'Built full-stack containerized applications for embedded systems using React, MUI, TypeScript/JavaScript, with Golang backends, PostgreSQL, and OpenAPI.',
      'Delivered full-stack features in PureScript, extending functionality across existing applications.',
      'Refactored and migrated tens of thousands of lines of C# into a Golang package enabling efficient CRUD operations on Windows Structured Storage files (CFB format).',
      'Advanced the development of DTS, a custom Golang-based language with Nuclio.',
      'Wrote automation scripts interfacing with relays, REST APIs, network protocols, and authentication systems for clients such as Entergy and Southern Company.',
      'Designed, containerized, and deployed applications using Docker, Kubernetes, and Jenkins CI/CD pipelines.',
      'Collaborated in an Agile Scrum environment (Jira, Confluence, Bitbucket) contributing to code reviews, sprint planning, releases, and cross-team communication.',
    ],
    skills: [
      'React', 'MUI', 'TypeScript', 'JavaScript', 'Golang', 'PostgreSQL', 'OpenAPI', 'PureScript', 'C#', 'Docker', 'Kubernetes','CI/CD', 'REST APIs', 'Networking', 'Agile', 'Scrum'
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
      'Implemented an embedded donation page using Stripe to enhance UX and streamline the donation process',
      'Improved website aesthetics through design principles and added features such as a newsletter pop-up.',
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
      'Directly worked with a diverse range of students & topics.',
      'Expanded my ability to adapt and articulate advanced programming concepts.',
    ],
    image: UILogo,
    skills: ['Communication', 'Composure', 'Adaptability'],
    projects: [],
  },
];

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen'>
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
                {/* <div className='mt-4'>
                  <h4 className='text-lg font-semibold'>Projects:</h4>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {exp.projects && exp.projects.map((project, i) => <li key={i}>{project}</li>)}
                  </ul>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
