import { create } from 'zustand';
import { ThemeState } from './types';


export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));