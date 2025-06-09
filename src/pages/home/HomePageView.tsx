import Logo from '@assets/images/logo.svg';
import Text from '@atoms/text';
import { cn } from '@helpers/utils';
import type { FC } from 'react';
import type { HomePageViewProps } from './types';

//Here you can add your page view presentation
const HomePageView: FC<HomePageViewProps> = (props) => {
  const { name } = props;
  return (
    <main
      className={cn(
        'w-auto max-w-[800px] p-12 flex flex-col items-center justify-center gap-6 h-full',
        'bg-gray-light-800 dark:bg-gray-dark-800 bg-clip-padding backdrop-filter backdrop-blur-sm',
        'border border-gray-light-500 dark:border-gray-dark-700 shadow-md rounded-md'
      )}
    >
      <div className='max-w-[500px] w-full'>
        <Logo />
      </div>
      <div className='w-auto border-t-4 border-b-4 border-accent text-text-light dark:text-text-dark text-h1 py-2'>
        <Text tag='h1' color='primary' className='text-center text-text-light dark:text-text-dark'>
          {name}
        </Text>
      </div>
    </div>
  );
};

export { HomePageView };
