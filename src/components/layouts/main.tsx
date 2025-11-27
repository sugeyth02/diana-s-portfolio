import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

interface IProps {
  children: ReactNode;
}

const Main = ({ children }: IProps) => {
  return (
    <div className='h-full min-h-screen'>
      <NavBar />
      <div className='pt-20 md:pt-0 md:ml-20'>
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Main;
