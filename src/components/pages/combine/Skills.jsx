import React from 'react';
import HTML from '../../../assets/2023-2024/html.png';
import CSS from '../../../assets/2023-2024/css.png';
import JavaScript from '../../../assets/2023-2024/javascript.png';
import ReactImg from '../../../assets/2023-2024/react.png';
import csharp from '../../../assets/2023-2024/icons8-c-sharp.png';
import flask from '../../../assets/2023-2024/icons8-flask-50.png';
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
    <div name='skills' className='w-full py-16 pb-24'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <span className='section-eyebrow'>Toolkit</span>
        <h2 className='section-title'>Skills</h2>

        <div className="mt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {miniSkills.map((mini, idx) => (
              <span
                key={idx}
                className="bg-white/80 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-pink-100"
              >
                {mini}
              </span>
            ))}
          </div>
        </div>

        <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='surface-card flex flex-col items-center rounded-[24px] p-5 transition-transform hover:-translate-y-1'>
              <img className='w-16 h-16' src={skill.image} alt={`${skill.name} icon`} />
              <p className='mt-3 text-lg font-medium text-slate-900'>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
