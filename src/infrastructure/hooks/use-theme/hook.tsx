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
    // Detectar la preferencia del sistema operativo
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
      console.log('systemTheme', systemTheme);

    // Establecer el tema, primero usando lo guardado en localStorage (si existe), si no se usa el tema del sistema
    const saved = localStorage.getItem('theme') as Theme | null;
    console.log('saved', saved);
    const themeToApply = saved ?? systemTheme;
    console.log(themeToApply) // Si no hay preferencia guardada, usa el tema del sistema
    applyTheme(themeToApply);

    // Aplicar la clase correspondiente al HTML
    document.documentElement.classList.add(themeToApply);
  }, []);


  return { theme, setTheme: applyTheme, toggleTheme };
};

export default useTheme;

