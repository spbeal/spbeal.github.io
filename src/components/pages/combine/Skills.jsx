import React from 'react';
import HTML from '../../../assets/2023-2024/html.png';
import CSS from '../../../assets/2023-2024/css.png';
import JavaScript from '../../../assets/2023-2024/javascript.png';
import ReactImg from '../../../assets/2023-2024/react.png';
import csharp from '../../../assets/2023-2024/icons8-c-sharp.png';
import flask from '../../../assets/2023-2024/icons8-flask-50.png';
// import tailwind from '../../../assets/icons/tailwind.png';
import c_icon from '../../../assets/icons/pngkit_download-png_1010012.png';
import typescript from '../../../assets/icons/png-transparent-typescript-plain-logo-icon-3069667125.png';
import Cplusplus from '../../../assets/2023-2024/c++.png';
import PythonImg from '../../../assets/2023-2024/python.png';
import PureScriptImg from '../../../assets/purescript.png';
import GolangImg from '../../../assets/go-2064624000.png';
import ViteImg from '../../../assets/vite-js-4096-logo-2031372859.png';

const skills = [
  { name: 'React', image: ReactImg },
  { name: 'Vite', image: ViteImg },
  { name: 'TypeScript', image: typescript },
  { name: 'JavaScript', image: JavaScript },
  { name: 'Golang', image: GolangImg },
  { name: 'PureScript', image: PureScriptImg },
  { name: 'Python', image: PythonImg },
  { name: 'C', image: c_icon },
  { name: 'C++', image: Cplusplus },
  { name: 'C#', image: csharp },
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'Flask', image: flask },
];

const miniSkills = [
  "Git",
  "Kubernetes",
  "PostgreSQL",
  "Node.js",
  "MUI",
  "Docker",
  "CI/CD",
  "Embedded Software",
  "REST APIs",
  "OpenAPI",
  "Embedded Systems",
  "Networking",
  "Agile",
  "Scrum",
];

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen py-16'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-extrabold text-gray-900 border-b-4 border-pink-600 inline-block'>
          Skills
        </h2>
        {/* <p className='mt-4 text-lg text-gray-700'>These are some of the technologies I've worked with:</p> */}

        {/* Mini Skills Section */}
        <div className="mt-6">
          {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Misc Skills</h3> */}
          <div className="flex flex-wrap justify-center gap-3">
            {miniSkills.map((mini, idx) => (
              <span
                key={idx}
                className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold shadow"
              >
                {mini}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105'>
              <img className='w-16 h-16' src={skill.image} alt={`${skill.name} icon`} />
              <p className='mt-3 text-lg font-medium text-gray-900'>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
