import { TTheme } from 'shared/types/theme-types';

export interface IThemeContextType {
  theme: TTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}
