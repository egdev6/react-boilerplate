import Loader from '@atoms/loader';
import Layout from '@templates/layout';
import { Suspense, lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// -- plop hook for import -- //
const HomePage = lazy(() => import('@pages/home'));

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
      {/* -- plop hook for route --*/}
      <Route path='*' element={<Navigate replace={true} to='/' />} />
    </Route>
  )
);

export default Router;
