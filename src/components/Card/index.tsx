import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { IPreviewProject } from '../../types/project';

interface IProps {
  data: IPreviewProject;
}

const Card = ({ data }: IProps) => {
  const { slug, preview, logo, title } = data;
  const logoImage = getImage(logo);

  return (
    <Link
      className='bg-white p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:cursor-pointer flex flex-col gap-6 w-full max-w-3xl group'
      to={`/projects/${slug}`}
    >
      <div className='flex items-center gap-4'>
        <GatsbyImage image={logoImage!} alt={title} />
        <span className='text-2xl font-semibold group-hover:text-black-500 transition-colors'>{title}</span>
      </div>
      <p className='text-base text-gray-600 leading-relaxed'>{preview}</p>
      <div className='flex items-center gap-2 text-black-500 font-medium group-hover:gap-3 transition-all'>
        <span>View project</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
};

export default Card;
