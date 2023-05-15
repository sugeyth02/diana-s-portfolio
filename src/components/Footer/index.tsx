import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-4  p-5 px-10 sm:px-5 bg-[#262625]'>
      {/* <div className='flex flex-col sm:flex-row justify-center items-center gap-5 p-4'>
        <a className='flex gap-2 items-center tno-underline text-slate-100' href='mailto:d.sugeyth02@gmail.com' target='_blank'>
          <FontAwesomeIcon icon={faEnvelope} size='2x' />
          <span>d.sugeyth02@gmail.com</span>
        </a>
        <a className='flex gap-2 items-center tno-underline text-slate-100' href='https://www.linkedin.com/in/diana-uma%C3%B1a-5894b6188/' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
          <span>Diana Umaña</span>
        </a>
        <a className='flex gap-2 items-center  no-underline text-slate-100' href='https://github.com/sugeyth02' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
          <span>@sugeyth02</span>
        </a>
  </div> */}
      <div className=' text-center text-slate-200'>
        Diana Umaña © {new Date().getFullYear()}
      </div>
    </div>
  );
};
