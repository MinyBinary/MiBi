import { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MoonHalfIcon from 'shared/assets/icons/theme/half-moon.svg?react';
import SunIcon from 'shared/assets/icons/theme/sun.svg?react';
import { SelectV2 } from 'shared/components/ui';
import { Durations } from 'shared/styles/style-variables';

import { useTheme } from './logic/hooks/useTheme';

import * as S from './ThemeSwitcher.styled';

export const ThemeSwitcher: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const animationFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      opacity: { duration: parseFloat(Durations.Medium), ease: 'easeOut' },
    },
  };

  return (
    <>
      <SelectV2
        containerContent={
          <AnimatePresence>
            {isDarkMode ? (
              <S.IconWrapperMoon {...animationFade}>
                <MoonHalfIcon />
              </S.IconWrapperMoon>
            ) : (
              <S.IconWrapperSun {...animationFade}>
                <SunIcon />
              </S.IconWrapperSun>
            )}
          </AnimatePresence>
        }
        isExpanded={isExpanded}
        selectOptions={[
          {
            label: 'Light',
            element: (
              <S.ThemeOptionWrapper>
                <S.IconWrapperSun $svgSize={16}>
                  <SunIcon />
                </S.IconWrapperSun>
                <S.ThemeLabelText>Light</S.ThemeLabelText>
              </S.ThemeOptionWrapper>
            ),
          },
          {
            label: 'Dark',
            element: (
              <S.ThemeOptionWrapper>
                <S.IconWrapperMoon $svgSize={16}>
                  <MoonHalfIcon />
                </S.IconWrapperMoon>
                <S.ThemeLabelText>Dark</S.ThemeLabelText>
              </S.ThemeOptionWrapper>
            ),
          },
        ]}
        onClick={() => setIsExpanded(!isExpanded)}
        cb={(value) => {
          if (isDarkMode && value === 'Dark') return;
          if (!isDarkMode && value === 'Light') return;
          toggleTheme();
        }}
        toggleExpand={() => setIsExpanded(!isExpanded)}
      />
    </>
  );
};
