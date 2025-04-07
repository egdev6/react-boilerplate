import { useCallback, useEffect } from 'react';
import { useThemeStore } from './store';
import { Theme } from './types';

const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, applyTheme]);
  
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
      console.log('systemTheme', systemTheme);

    const saved = localStorage.getItem('theme') as Theme | null;
    const themeToApply = saved ?? systemTheme;
    applyTheme(themeToApply);

    // Aplicar la clase correspondiente al HTML
    document.documentElement.classList.add(themeToApply);
  }, []);


  return { theme, setTheme: applyTheme, toggleTheme };
};

export default useTheme;

