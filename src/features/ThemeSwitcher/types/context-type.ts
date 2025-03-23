import { TTheme } from 'shared/types/theme-types';

export interface IThemeContextType {
  theme: TTheme;
  toggleTheme: () => void;
}
