import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@config/react-query';
import { Theme, useTheme } from '@hooks/use-theme';

const App = () => {
  const { setTheme } = useTheme();
  const saved = localStorage.getItem('theme') as Theme | null;
  const theme = saved ?? 'dark';
  setTheme(theme);

  return(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  )
}

export default App;
