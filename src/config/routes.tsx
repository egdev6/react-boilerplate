import type { RouteProps } from '@models/routes';
import { lazy } from 'react';
import CustomQueryClientProvider from '@system/providers/react-query-provider';

const defaultProviders: React.FC<React.PropsWithChildren>[] = [CustomQueryClientProvider];

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
