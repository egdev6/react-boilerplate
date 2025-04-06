import type { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-background dark:bg-dark-background z-50'>
      <div className='loader text-text dark:text-dark-text before:border-b-primary before:border-[5px] before:border-solid before:border-white before:dark:border-dark-grey-dark'>
        L &nbsp; ading
      </div>
    </div>
  );
};

export default Loader;
