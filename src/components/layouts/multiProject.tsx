import React, { ReactNode } from 'react';
import { IPreviewProject } from '../../types/project';
import Card from '../Card';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

interface IProps {
  children: ReactNode;
  projects: IPreviewProject[];
}

const MultiProject = ({ children, projects }: IProps) => {
  return (
    <div className='h-full min-h-screen'>
      <NavBar />
      <div className='pt-20 md:pt-0 md:ml-20'>
        {children}
        <div className='max-w-5xl w-full mx-auto px-4 mb-[50px] flex flex-col gap-4 items-center'>
          <h1 className='text-2xl self-start mb-4'>Related Projects</h1>
          {projects.map((project, index) => (
            <Card data={project} key={index} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MultiProject;
