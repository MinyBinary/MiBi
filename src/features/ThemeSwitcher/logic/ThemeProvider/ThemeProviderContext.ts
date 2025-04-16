import { createContext } from 'react';
import { IThemeContextType } from 'features/ThemeSwitcher/types/context-type';
import { darkTheme } from 'shared/styles/theme';

export const ThemeContext = createContext<IThemeContextType>({
  theme: darkTheme,
  isDarkMode: true,
  toggleTheme: () => {
    /* empty */
  },
});
