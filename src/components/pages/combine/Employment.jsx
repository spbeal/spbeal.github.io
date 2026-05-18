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
    <div name='employment' className='w-full min-h-screen page-shell'>
      <div className="page-container py-32 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl p-6">
          <div className="text-center">
            <span className="section-eyebrow">Career</span>
            <h1 className="section-title">Experience</h1>
            <p className="section-copy mx-auto max-w-3xl">
              Roles that shaped how I think about engineering quality, collaboration, and delivery.
            </p>
          </div>
        <div className='mt-10 space-y-8'>
          {experienceData.map((exp, index) => (
            <div key={index} className='surface-card flex flex-col gap-6 rounded-[30px] p-6 transition-transform hover:-translate-y-1 md:flex-row md:items-start md:p-8'>
              <img className='h-24 w-24 rounded-2xl bg-white/80 object-contain p-3' src={exp.image} alt={`${exp.company} logo`} />
              <div className='md:ml-2 text-left'>
                <h2 className='text-2xl font-semibold text-slate-900'>{exp.title}</h2>
                <h3 className='mt-1 text-lg font-medium text-slate-700'>{exp.company}</h3>
                <p className='mt-2 inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700'>{exp.years}</p>
                <div className='mt-4'>
                  <ul className='list-disc list-inside space-y-2 text-slate-600'>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4'>
                  <h4 className='mb-3 text-lg font-semibold text-slate-900'>Skills</h4>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-pink-100 bg-white/80 px-3 py-1 text-sm font-semibold text-pink-700 shadow-sm"
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
