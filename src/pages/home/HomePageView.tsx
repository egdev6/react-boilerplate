import Logo from '@assets/images/logo.svg';
import type { FC } from 'react';
import type { HomePageViewProps } from './types';

//Here you can add your page view presentation
const HomePageView: FC<HomePageViewProps> = (props) => {
  const { name } = props;
  return (
    <div className='w-auto max-w-[800px] p-12 flex flex-col items-center justify-center gap-6 h-full bg-dark-gray-dark rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-[var(--color-gray-light)] shadow-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-20 dark:border-[var(--color-dark-gray-light)] dark:shadow-md'>
      <div className='w-[600px]'>
        <Logo />
      </div>
      <h1 className='w-auto border-t-4 border-b-4 border-accent text-[var(--color-text) dark:text-[var(--color-dark-text)] text-h1 py-2'>
        {name}
      </h1>
    </div>
  );
};

export { HomePageView };
