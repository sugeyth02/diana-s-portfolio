import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Main from '../components/layouts/main';

const About = () => {
  return (
    <div>
      <title>Diana's About</title>
      <Main>
        <div className='font-sans mb-[50px]'>
          <h1 className='text-4xl font-sans text-center py-12'>About me</h1>
          <div className='flex p-[12px] flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row'>
            <div className=' bg-slate-300 inline-block rounded-full'>
              <StaticImage
                src='./../images/presentation.png'
                alt='presentation'
                width={350}
                height={350}
                placeholder='blurred'
              />
            </div>
            <div className='w-[60%]'>
              <h2 className='text-2xl font-medium'>Who I am?</h2>
              <div className='pt-3 text-base'>
                <p className='p-2'>I am a driven and creative individual with a passion for technology and a thirst for knowledge. Throughout my academic career, I have consistently challenged myself to learn new skills and push my boundaries, and I am excited to keep this same mindset in the professional world.</p>
                <p className='p-2'>I am constantly seeking out new challenges and opportunities to learn new things while I do my job with love and joy!</p>
                <p className='p-2'>Beyond my technical abilities, I also take pride in my ability to work well with others and help others, I am a strong believer in the power of collaboration and teamwork!</p>
                <p className='p-2'>Looking ahead to my future career, I am eager to continue growing and developing as a professional in the field of technology. With my passion for innovation, dedication to learn, and strong work ethic.</p>
              </div>
            </div>
          </div>
          <div className='flex p-[12px] flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row-reverse'>
            <div className='bg-slate-200 inline-block rounded-full'>
              <StaticImage
                src='./../images/education.png'
                alt='education'
                width={350}
                height={350}
                placeholder='blurred'
              />
            </div>
            <div className='w-[60%]'>
              <h2 className='text-2xl font-medium pb-3'>My Education</h2>
              <ul className=' flex flex-col gap-2'>
                <h3 className='font-medium text-lg  pb-1'>Basic</h3>
                <li>
                  [2018 San Miguel/ ES]{' '}
                  <span className='italic'>Middle Education/High school:</span>{' '}
                  Complejo Educativo Católico Santa Sofia.
                </li>
                <li>
                  [2019-now La Libertad/ ES]{' '}
                  <span className=' italic'>
                    Higher Education / Computer Engineering:
                  </span>{' '}
                  Universidad Centroamericana José Simeón Cañas
                </li>
                <h1 className=' text-lg font-medium pb-1'>Diplomas</h1>
                <li>
                  [2015-2017 San Miguel/ ES]{' '}
                  <span className='italic'>English course:</span> Centro
                  Cultural Salvadoreño Americano.
                </li>
                <li>
                  [2018 San Miguel/ ES]{' '}
                  <span className=' italic'>TOELF Course:</span> Centro Cultural
                  Salvadoreño Americano.
                </li>
                <li>
                  [2022 San Salvador/ ES]{' '}
                  <span className=' italic'>React Training</span> Applaudo
                </li>
              </ul>
              <h2 className='text-2xl font-medium pb-3 pt-3'>My Experience</h2>
              <ul className=' flex flex-col gap-2'>
                <li>
                  [2021 San Salvador/ ES]{' '}
                  <span className=' italic'>
                    Customer Service Agent
                  </span>{' '}
                  Teleperformance
                </li>
                <li>
                  [2022-2023 San Salvador/ ES]{' '}
                  <span className=' italic'>
                    React Developer
                  </span>{' '}
                  Applaudo
                </li>
              </ul>
            </div>
          </div>
          <div className='w-[100%] flex p-[12px] flex-col items-center justify-around gap-12 sm:gap-4 sm:flex-row'>
            <div className='bg-slate-400 inline-block rounded-full mx-0 sm:mx-12'>
              <StaticImage
                src='./../images/experience.png'
                alt='education'
                width={350}
                height={350}
                placeholder='blurred'
              />
            </div>
            <div className='w-[100%] sm:w-[60%]'>
              <h2 className='text-2xl font-medium pb-3'>Skills</h2>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-pink-400 text-slate-100 '>
                  JavaScript
                </span>
                <div  className='w-[100%] bg-pink-500 '></div>
                <span className='px-2'>100%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-green-400 text-slate-100 '>
                  Scrum
                </span>
                <div  className='w-[100%] bg-green-500 '></div>
                <span className='px-2'>100%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-orange-300 text-slate-100'>React</span>
                <div  className='w-[100%] bg-orange-400 '></div>
                <span className='px-2'>100%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-cyan-300 text-slate-100'>HTML</span>
                <div  className='w-[100%] bg-cyan-400 '></div>
                <span className='px-2'>100%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-teal-300 text-slate-100'>CSS</span>
                <div  className='w-[100%] bg-teal-400 '></div>
                <span className='px-2'>100%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-purple-400 text-slate-100'>
                  TypeScript
                </span>
                <div  className='w-[95%] bg-purple-500 '></div>
                <span className='px-2'>95%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-rose-400 text-slate-100'>
                  NextJS
                </span>
                <div  className='w-[90%] bg-rose-500 '></div>
                <span className='px-2'>90%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-blue-400 text-slate-100'>
                  Gatsby
                </span>
                <div  className='w-[50%] bg-blue-500 '></div>
                <span className='px-2'>50% </span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-lime-400 text-slate-100'>
                  Tailwind
                </span>
                <div  className='w-[95%] bg-lime-500 '></div>
                <span className='px-2'>95%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-red-300 text-slate-100'>C++</span>
                <div  className='w-[60%] bg-red-400 '></div>
                <span className='px-2'>60%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-emerald-400 text-slate-100'>
                  Mongo
                </span>
                <div  className='w-[80%] bg-emerald-500 '></div>
                <span className='px-2'>80%</span>
              </div>
              <div className='bg-gray-200 flex mb-4'>
                <span className='px-2 bg-yellow-300 text-slate-100'>Spring Boot</span>
                <div  className='w-[50%] bg-yellow-400 '></div>
                <span className='px-2'>50%</span>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default About;
