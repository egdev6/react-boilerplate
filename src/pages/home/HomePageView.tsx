import type { FC } from 'react';
import type { HomePageViewProps } from './types';

// Aquí puedes agregar la visualización de tu página
const HomePageView: FC<HomePageViewProps> = (props) => {
  const { name } = props;
  return(
    <div className='w-full h-dvh flex flex-col items-center justify-center' >
      <h1>{name}</h1>;
    </div>
  ) 
};

export { HomePageView };