import { useCallback, useEffect } from 'react';
import { useThemeStore } from './store';
import type { Theme } from './types';

const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const applyTheme = useCallback(
    (newTheme: Theme) => {
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
    },
    [setTheme]
  );

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, applyTheme]);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const saved = localStorage.getItem('theme') as Theme | null;
    const themeToApply = saved ?? systemTheme;
    applyTheme(themeToApply);

    document.documentElement.classList.add(themeToApply);
  }, [applyTheme]);

  return { theme, setTheme: applyTheme, toggleTheme };
};

export default useTheme;
