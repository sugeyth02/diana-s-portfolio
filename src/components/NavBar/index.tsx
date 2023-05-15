import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import * as React from 'react';

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className='sticky top-0 bg-[#262625] py-[16px] px-8 flex  gap-4 justify-around items-center flex-wrap z-50'>
      <Link
        className={`hover:text-orange-300 ${
          location.pathname === '/' ? 'text-orange-300' : 'text-slate-50'
        } `}
        to='/'
      >
        <span>HOME</span>
      </Link>
      <Link
        className={`hover:text-orange-300 ${
          location.pathname === '/about' ? 'text-orange-300' : 'text-slate-50'
        } `}
        to='/about'
      >
        <span>ABOUT</span>
      </Link>
      <Link
        className={`hover:text-orange-300 ${
          location.pathname.includes('/projects')
            ? 'text-orange-300'
            : 'text-slate-50'
        } `}
        to='/projects'
      >
        <span>PROJECTS</span>
      </Link>
    </div>
  );
};
