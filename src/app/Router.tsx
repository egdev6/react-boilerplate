import Loader from '@atoms/loader';
import Layout from '@templates/layout';
import { Suspense, lazy } from 'react';
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
      <Route index={true} element={<HomePage />} />
      <Route path='people' element={<PeoplePage />} />
      <Route path='*' element={<Navigate replace={true} to='/' />} />
    </Route>
  )
);

export default Router;
