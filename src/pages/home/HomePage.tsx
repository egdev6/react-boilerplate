import type { FC } from 'react';
import { HomePageView } from './HomePageView';
import type { HomePageProps } from './types';

// Here you can add your page logic
const HomePage: FC<HomePageProps> = () => {
  const name = 'Egdev React Boileplate V2';
  return <HomePageView name={name} />;
};

export default HomePage;
