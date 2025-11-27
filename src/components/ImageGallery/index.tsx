import React, { useState } from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

interface IProps {
  images: ImageDataLike[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
  title: string
}

const ImageGallery = ({ images, isOpen, onClose, initialIndex = 0, title }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  if (!isOpen) return null

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center'
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white hover:text-orange-300 transition-colors z-10'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Counter */}
      <div className='absolute top-4 left-4 text-white text-lg font-medium z-10'>
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handlePrevious()
        }}
        className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Image Container */}
      <div
        className="flex items-center justify-center p-10 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getImage(images[currentIndex])!.images.fallback!.src}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleNext()
        }}
        className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Thumbnail Navigation */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 py-2 bg-black/50 rounded-lg'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
              ? 'border-orange-300 scale-110'
              : 'border-transparent hover:border-white/50'
              }`}
          >
            <GatsbyImage
              image={getImage(image)!}
              alt={`${title} - Thumbnail ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
