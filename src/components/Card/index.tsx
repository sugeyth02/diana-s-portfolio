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
      className='bg-gray-100 drop-shadow-md p-4 rounded-lg border-2 hover:border-[#403f3f] 
    hover:cursor-pointer flex flex-col gap-6 w-[85%]'
      to={`/projects/${slug}`}
    >
      <div className='flex items-center gap-4'>
        <GatsbyImage image={logoImage!} alt={title} />
        <span className='text-xl font-medium'>{title}</span>
      </div>
      <p className='text-base '>{preview}</p>
      <p className='italic text-gray-700'>Click to view more</p>
    </Link>
  );
};

export default Card;
