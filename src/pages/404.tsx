import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <div className='flex justify-center flex-col gap-2 items-center h-screen font-sans md:gap-0 md:flex-row'>
        <div className='pr-6 pl-6'>
          <StaticImage
            src='../images/error-illustration.png'
            alt='error image'
            width={400}
            height={450}
            placeholder='blurred'
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-sans text-6xl text-gray-600'>Ops!</h1>
          <h2 className='font-sans text-4xl text-gray-600'>404</h2>
          <button className='rounded-md  bg-cyan-700 p-3 hover:bg-cyan-600 text-slate-100 mt-8'>
            <Link to='/'>Go home</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
