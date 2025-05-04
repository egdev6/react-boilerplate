import Layout from '@templates/layout';
import { Suspense, lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//-- plop hook for import --//
export const HomePage = lazy(() => import('@pages/home'));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <Layout />
        </Suspense>
      }
    >
      {/* -- plop hook for route -- */}
      <Route index={true} element={<HomePage />} />
      <Route path='*' element={<Navigate replace={true} to='/' />} />
    </Route>
  )
);

export default Router;
