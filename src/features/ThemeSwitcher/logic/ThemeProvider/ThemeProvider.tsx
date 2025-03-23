import { FC, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from 'shared/styles/theme';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from './ThemeProviderContext';

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProviderComponent: FC<IThemeProviderProps> = ({
  children,
}: IThemeProviderProps) => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === darkTheme ? lightTheme : darkTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
