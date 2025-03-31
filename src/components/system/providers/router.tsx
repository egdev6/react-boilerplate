import { RouterProvider } from 'react-router-dom';

import router from '@system/routes';

const CustomRouterProvider = () => <RouterProvider router={router} />;

export default CustomRouterProvider;
