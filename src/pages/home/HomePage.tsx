import type { FC } from 'react';
import { HomePageView } from './HomePageView';
import type { HomePageProps } from './types';

// Aquí puedes agregar la lógica de tu página
const HomePage: FC<HomePageProps> = () => {
  const name = 'Home';
  return <HomePageView name={name} />;
};

export default HomePage;
