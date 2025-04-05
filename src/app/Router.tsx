import Layout from '@templates/layout';
import Loader from '@atoms/loader';
import { lazy, Suspense } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home'));
const PeoplePage = lazy(() => import('@pages/people'));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      }
    >
      <Route index element={<HomePage />} />
      <Route path='people' element={<PeoplePage />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Route>,
  ),
);

export default Router;
