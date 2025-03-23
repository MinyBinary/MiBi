import { useContext } from 'react';
import { ThemeContext } from 'features/ThemeSwitcher/logic/ThemeProvider/ThemeProviderContext';
import { IThemeContextType } from 'features/ThemeSwitcher/types/context-type';

export const useTheme = (): IThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
