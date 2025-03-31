import type { RouteProps } from '@models/routes';
import { lazy } from 'react';
import { CharactersProvider } from '@/hooks/use-characters';

const defaultProviders: React.FC<React.PropsWithChildren>[] = [CharactersProvider];

export const pathNames: Record<string, string> = {
  Root: '/',
};

export const routeNames: Record<string, string> = {
  Root: 'Home Page',
};

export const routes: RouteProps[] = [
  {
    key: 'Root',
    path: pathNames.Root,
    name: routeNames.Root,
    component: lazy(() => import('@pages/home')),
    providers: defaultProviders,
    children: undefined,
  },
];
