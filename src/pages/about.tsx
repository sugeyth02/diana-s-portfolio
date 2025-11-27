import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Main from '../components/layouts/main';

const About = () => {
  return (
    <div>
      <title>Diana's About</title>
      <Main>
        <div className="font-sans mb-[50px]">
          <h1 className="text-4xl font-sans text-center py-12">About me</h1>
          <div className="flex p-[12px] flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row">
            <div className=" bg-slate-300 inline-block rounded-full">
              <StaticImage
                src="./../images/presentation.png"
                alt="presentation"
                width={250}
                height={250}
                placeholder="blurred"
              />
            </div>
            <div className="w-[60%]">
              <h2 className="text-2xl font-medium">Who I am?</h2>
              <div className="pt-3 text-base">
                <p className="p-2">
                  I'm a passionate software engineer with a deep love for technology and continuous learning.
                  I thrive on tackling complex challenges and transforming innovative ideas into elegant solutions
                  that make a real impact.
                </p>
                <p className="p-2">
                  What drives me is the perfect blend of creativity and logic that software development offers.
                  Whether I'm building responsive web applications, optimizing backend systems, or exploring new
                  frameworks, I approach every project with enthusiasm and attention to detail.
                </p>
                <p className="p-2">
                  Collaboration is at the heart of how I work. I believe the best solutions emerge when diverse
                  minds come together, share knowledge, and support each other's growth. I'm always eager to
                  learn from my peers and contribute to a positive team culture.
                </p>
                <p className="p-2">
                  I'm excited to continue growing as a developer, embracing new technologies, and building
                  software that matters. <b>Let's create something amazing together!</b>
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-[12px] flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row-reverse">
            <div className="bg-orange-300 inline-block rounded-full">
              <StaticImage
                src="./../images/education.png"
                alt="education"
                width={250}
                height={250}
                placeholder="blurred"
              />
            </div>
            <div className="w-[60%]">
              <h2 className="text-2xl font-medium pb-3">Education</h2>
              <ul className="flex flex-col gap-4 list-disc pl-5">
                <li className='list-none'>
                  <span className="font-bold">Computer Engineering</span>
                  <div>Universidad Centroamericana José Simeón Cañas</div>
                  <div className="text-sm text-gray-600">2019-2024</div>
                  <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    La Libertad, ES
                  </span>
                </li>
                  <li className='list-none'>
                  <span className="font-bold">React Trainee Program</span>
                  <div>Applaudo Studios</div>
                  <div className="text-sm text-gray-600">2022</div>
                  <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    La Libertad, ES
                  </span>
                </li>
              </ul>
              <h3 className="text-lg font-medium pt-4 pb-2">Diplomas</h3>
              <ul className="flex flex-col gap-4 list-none pl-5">
                <li>
                  <span className="font-bold">English Course</span>
                  <div>Centro Cultural Salvadoreño Americano</div>
                  <div className="text-sm text-gray-600">2015-2017</div>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    San Miguel, ES
                  </span>
                </li>
                 <li>
                  <span className="font-bold">GraphQL Course</span>
                  <div>Udemy</div>
                  <div className="text-sm text-gray-600">2022</div>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Remote
                  </span>
                </li>
                 <li>
                  <span className="font-bold">Node JS Course</span>
                  <div>Udemy</div>
                  <div className="text-sm text-gray-600">2022</div>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Remote
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] flex p-[12px] flex-col items-center justify-around gap-12 sm:gap-4 sm:flex-row">
            <div className="bg-zinc-400 inline-block rounded-full mx-0 sm:mx-12">
              <StaticImage
                src="./../images/experience.png"
                alt="education"
                width={250}
                height={250}
                placeholder="blurred"
              />
            </div>
            <div className="w-[80%] sm:w-[50%]">
              <h2 className="text-2xl font-medium pb-3">Skills</h2>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-amber-400 text-slate-100">
                  JavaScript
                </span>
                <div className="w-[100%] bg-amber-500 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-cyan-400 text-slate-100">React</span>
                <div className="w-[100%] bg-cyan-500 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-sky-500 text-slate-100">React Native</span>
                <div className="w-[85%] bg-sky-600 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">90%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-red-300 text-slate-100">HTML</span>
                <div className="w-[100%] bg-red-400 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-teal-300 text-slate-100">CSS</span>
                <div className="w-[100%] bg-teal-400 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-blue-400 text-slate-100">
                  TypeScript
                </span>
                <div className="w-[100%] bg-blue-500 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-rose-400 text-slate-100">Next js</span>
                <div className="w-[50%] bg-rose-500 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">50%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-violet-400 text-slate-100">
                  Gatsby
                </span>
                <div className="w-[50%] bg-violet-500 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">50%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-red-500 text-slate-100">
                  Angular
                </span>
                <div className="w-[90%] bg-red-600 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">90%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-cyan-400 text-slate-100">
                  Tailwind
                </span>
                <div className="w-[100%] bg-cyan-500 flex items-center justify-end px-2 text-slate-100">100%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-emerald-400 text-slate-100">
                  Mongo
                </span>
                <div className="w-[80%] bg-emerald-500 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">80%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-green-400 text-slate-100">
                  Spring Boot
                </span>
                <div className="w-[46%] bg-green-500 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">50%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-green-500 text-violet-100">
                  Node js
                </span>
                <div className="w-[85%] bg-green-600 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">85%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-indigo-400 text-violet-100">
                  Express js
                </span>
                <div className="w-[83%] bg-indigo-500 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">85%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-pink-500 text-slate-100">
                  Nest js
                </span>
                <div className="w-[70%] bg-pink-600 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">70%</div>
              </div>
              <div className="flex mb-2 rounded-[10px] overflow-hidden">
                <span className="px-2 bg-blue-500 text-slate-100">
                  Ionic
                </span>
                <div className="w-[60%] bg-blue-600 flex items-center justify-end px-2 text-slate-100 rounded-r-[10px]">60%</div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default About;
