import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

interface IProps {
  children: ReactNode;
}

const Main = ({ children }: IProps) => {
  return (
    <div className=' h-full min-h-screen'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Main;
