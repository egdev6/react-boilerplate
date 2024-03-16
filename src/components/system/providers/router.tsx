import { RouterProvider } from 'react-router-dom'

import router from 'components/system/routes'

const CustomRouterProvider = () => <RouterProvider router={router} />

export default CustomRouterProvider
