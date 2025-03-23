import { FC } from 'react';

import { useTheme } from './logic/hooks/useTheme';

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Switch theme</button>;
};
