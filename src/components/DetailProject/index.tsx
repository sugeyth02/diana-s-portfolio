import React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'gatsby';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IProject } from '../../types/project';

interface IProps {
  data: IProject;
}

const DetailProject = ({ data }: IProps) => {
  const {
    title,
    link,
    description,
    tags,
    logo,
    images,
    slug,
    applied_concepts,
  } = data;

  const logoImage = getImage(logo);

  return (
    <div className='max-w-5xl w-full mx-auto pt-4 px-4 mb-[96px]'>
      <Link className='absolute top-32 left-4' to='/projects'>
        {/* <FontAwesomeIcon
          icon={faArrowLeft}
          size='2x'
          className='hover:text-orange-300 hover:pointer text-[#262625]'
  /> */}
      </Link>
      <div className='flex items-center w-full justify-center gap-4 pt-9'>
        <GatsbyImage image={logoImage!} alt={title} />
        <span className='text-4xl font-medium'>{title}</span>
      </div>
      <div className='flex justify-center py-6'>
        <div className='w-[90%] sm:w-[80%]'>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                className='flex justify-center px-4'
                key={`image_${index}`}
              >
                <GatsbyImage image={getImage(image)!} alt={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl'>Tags</h1>
          <div className='flex gap-2'>
            {tags.map((tag) => (
              <span
                key={`tag_${tag}`}
                className='bg-orange-300 px-2 py-1 rounded-lg'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl'>View Project</h1>
          <a className='underline' href={`${link}`}>
            {link}
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl'>Description</h1>
          <p>{description}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl'>Applied concepts</h1>
          <ul className='flex flex-col gap-4'>
            {applied_concepts.map((concept) => (
              <li key={`concept_${concept}`}>
                <span className='bg-slate-300 px-2 py-1 rounded-lg'>
                  {concept}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailProject;
