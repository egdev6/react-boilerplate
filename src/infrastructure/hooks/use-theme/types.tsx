export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
