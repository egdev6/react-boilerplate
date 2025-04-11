import { create } from 'zustand';
import type { ThemeState } from './types';

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
