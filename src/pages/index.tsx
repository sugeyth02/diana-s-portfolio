import { Link } from 'gatsby';
import * as React from 'react';
import Particles from 'react-tsparticles';
import options from '../utils/particles/mainOptions';

const IndexPage = () => {
  return (
    <main className='bg-transparent'>
      <title>Diana's Portfolio</title>
      <div className='flex justify-center items-center h-screen'>
        <Particles options={{ ...options }} />
        <div className='bg-[#2d2d2dcb] flex flex-col items-center gap-4 w-[60%] p-8 rounded-sm'>
          <p className='text-slate-300  font-sans text-center break-word text-3xl'>
            Hello, I'm <span className='text-orange-300'>Diana Umaña</span>.
            <br />
            I'm a React developer.
          </p>
          <button className='rounded-md border-2   p-3 hover:bg-cyan-600 text-slate-100 mt-8'>
            <Link to='/about'>View my work</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
