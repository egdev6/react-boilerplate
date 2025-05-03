import type { FC } from 'react';
import type { HomePageViewProps } from './types';

//Here you can add your page view presentation
const HomePageView: FC<HomePageViewProps> = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export { HomePageView };
