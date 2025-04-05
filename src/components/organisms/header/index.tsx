import type { FC } from 'react';
import Logo from '@assets/images/logo.svg';

const Header: FC = () => (
  <header className='w-full h-[60px] sm:h-[80px] py-0 px-6 sm:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-9 backdrop-blur-[10px]'>
    <div className='logo-container w-auto h-[30px] md:h-[40px]'>
      <Logo />
    </div>
    <nav />
  </header>
);

export default Header;
