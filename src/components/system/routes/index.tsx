import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import Layout from 'components/system/layout'
import HomePage from 'components/pages/home'
import routes from 'config/routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={routes.root} element={<HomePage />} />
    </Route>
  )
)

export default router
