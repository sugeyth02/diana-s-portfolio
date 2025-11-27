import React, { useState } from 'react'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import { Carousel } from 'antd'
import { Link } from 'gatsby'
import { IProject } from '../../types/project'
import ImageGallery from '../ImageGallery'

interface IProps {
  data: IProject
}

const DetailProject = ({ data }: IProps) => {
  const {
    title,
    link,
    description,
    logo,
    images,
    applied_concepts,
  } = data

  const logoImage = getImage(logo)
  const [galleryOpen, setGalleryOpen] = useState(false)

  return (
    <div className='max-w-5xl gap-8 w-full mx-auto pt-4 px-4 mb-[96px] justify-center items-center flex flex-col'>
      <div className='flex w-full'>
        <div className='w-full h-full bg-red'>
          <Carousel autoplay autoplaySpeed={1500} dots>
            {images.map((image, index) => (
              <div
                className='w-full h-full max-h-[400px] cursor-pointer'
                key={`image_${index}`}
                onClick={() => setGalleryOpen(true)}
              >
                <img
                  src={getImage(image)!.images.fallback!.src}
                  alt={`${title} - Image ${index}`}
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='flex items-center w-full justify-center gap-8 pt-14 pb-14'>
        <GatsbyImage image={logoImage!} alt={title} />
        <span className='text-4xl font-medium'>{title}</span>
      </div>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-2'>
          <p>{description}</p>
        </div>
        {applied_concepts.length > 0 && <div className='flex flex-col gap-2'>
          <h1 className='text-2xl'>Tech stack</h1>
          <ul className='flex flex-col gap-4'>
            {applied_concepts.map((concept) => (
              <li key={`concept_${concept}`}>
                <span className='bg-slate-100 px-2 py-1 rounded-lg'>
                  {concept}
                </span>
              </li>
            ))}
          </ul>
        </div>}
          <div className='flex flex-col gap-2'>
          <h1 className='text-xl'>View Project</h1>
          <a className='underline' href={`${link}`}>
            {link}
          </a>
        </div>
      </div>
        <Link
        to='/projects'
        className='self-center w-fit justify-center flex items-center gap-2 px-4 py-2 mt-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full transition-all duration-300 group'
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={20}
          width={20}
          fill='currentColor'
          viewBox="0 0 448 512"
          className='text-gray-700 group-hover:text-gray-500 transition-colors duration-300 group-hover:-translate-x-1 transform transition-transform'
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <span className='text-md font-medium text-gray-700 group-hover:text-gray-500 transition-colors duration-300'>
          Back to Projects
        </span>
      </Link>
      <ImageGallery images={images} isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} initialIndex={0} title={title} />
    </div>
  )
}
export default DetailProject
