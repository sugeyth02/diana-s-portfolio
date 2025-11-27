import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import * as React from 'react';

export const NavBar = () => {
  const location = useLocation();

  const navItems = [
    {
      name: 'Know me',
      path: '/about',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <nav className='md:hidden fixed top-0 left-0 right-0 bg-[#262625] py-4 px-6 flex items-center justify-end z-50 shadow-lg'>

        <div className='flex gap-6'>
          {navItems.map((item) => {
            const isActive = item.path === '/about'
              ? location.pathname === '/about'
              : location.pathname.includes(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  isActive ? 'text-orange-300' : 'text-slate-50 hover:text-orange-300'
                }`}
              >
                {item.icon}
                <span className='text-xs font-medium align-center text-center'>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className='hidden md:flex fixed left-0 top-0 h-screen w-25 bg-[#262625] flex-col items-center py-8 gap-8 z-50 shadow-lg'>
        <div className='flex flex-col gap-6 flex-1'>
          {navItems.map((item) => {
            const isActive = item.path === '/about'
              ? location.pathname === '/about'
              : location.pathname.includes(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`mx-1 group relative flex flex-col items-center gap-1 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-orange-300 bg-orange-300/10'
                    : 'text-slate-50 hover:text-orange-300 hover:bg-orange-300/5'
                }`}
              >
                {item.icon}
                <span className='text-xs font-medium text-center'>{item.name}</span>

                {/* Tooltip on hover */}
                <span className='absolute left-full ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap'>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};
