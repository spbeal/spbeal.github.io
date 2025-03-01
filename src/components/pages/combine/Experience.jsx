import React from 'react';
import SELLogo from '../../../assets/60644576d213a1edd8b2507000d4f98a-4011923539.jpeg'; // Add relevant logos
// import EventSecurityLogo from '../../../assets/2023-2024/EventSecurityLogo.png';
// import TutorLogo from '../../../assets/2023-2024/TutorLogo.png';
// import LifeguardLogo from '../../../assets/2023-2024/LifeguardLogo.png';
// import WebDevLogo from '../../../assets/2023-2024/WebDevLogo.png';

const experienceData = [
  {
    title: 'Software Engineer Intern',
    company: 'SEL',
    years: '2024 - Present',
    description: [
      'Provided efficient scripts for customers and their needs',
      'Participated in thorough testing and worked with all types of relays',
      'Learned and worked around CI/CD pipelines',
      'Worked on a team running Agile Scrum sprints on Bitbucket, Jira, and Confluence',
    ],
    skills: ['CI', 'Docker', 'Kubernetes', 'Golang', 'Python', 'Clusters & Nuclio', 'DTS', 'REST APIs', 'Networking', 'Embedded Applications'],
    projects: [
      'Python scripts for customers in Flask hitting endpoints and creating them',
      'CLI command line scripts using Typer and Python',
      'Developed tests against transpiled Golang code',
    ],
    image: SELLogo,
  },
//   {
//     title: 'Event Security',
//     company: 'Various Events',
//     years: '2023 - 2024',
//     description: [
//       'Provided excellent customer service to every passerby',
//       'Ensured safety and restricted access to assigned areas',
//     ],
//     //image: EventSecurityLogo,
//   },
    {
    title: 'Website Development Intern',
    company: 'Foes of the Clearwater',
    years: '2022',
    description: [
      'Implemented a custom embedded donate page using Stripe to enhance user experience and streamline the donation process',
      'Enhanced website aesthetics through design principles, improving overall look and feel for better user engagement',
      'Added and improved various features such as a newsletter pop-up and a 404 page to enhance website functionality',
    ],
    // skills: [],
    // projects: [
    //   'https://foesoftheclearwater.com',

    // ],
    //image: WebDevLogo,
  },
  {
    title: 'Academic Tutor and SI Pass Leader',
    company: 'University of Idaho',
    years: '2022 - 2024',
    description: [
      'Directly tutored a diverse range of students in math and computer science',
      'Expanded ability to adapt and articulate complicated concepts through student interaction',
      'Boosted students study skills, confidence, and problem-solving abilities through personalized guidance',
    ],
    // skills: [],
    // projects: [
    //   'https://foesoftheclearwater.com',

    // ],
    //image: TutorLogo,
  },
//   {
//     title: 'Lifeguard',
//     company: 'Community Pool',
//     years: '2021 - 2022',
//     description: ['Worked part-time providing customer service and sitting on stand guarding'],
//     //image: LifeguardLogo,
//   },

];

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen pt-32'>
      <div className='max-w-5xl mx-auto px-6 text-center mb-16'>
        <h2 className='text-4xl font-extrabold text-gray-900 border-b-4 border-pink-600 inline-block'>
          Experience
        </h2>
        <div className='mt-8 space-y-8'>
          {experienceData.map((exp, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center bg-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-100'>
              <img className='w-24 h-24 object-contain' src={exp.image} alt={`${exp.company} logo`} />
              <div className='md:ml-6 text-left'>
                <h3 className='text-2xl font-semibold'>{exp.title} - {exp.company}</h3>
                <p className='text-lg text-gray-700'>{exp.years}</p>
                <div className='mt-4'>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4'>
                  <h4 className='text-lg font-semibold'>Skills:</h4>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {exp.skills && exp.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                  </ul>
                </div>
                <div className='mt-4'>
                  <h4 className='text-lg font-semibold'>Projects:</h4>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {exp.projects && exp.projects.map((project, i) => <li key={i}>{project}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
