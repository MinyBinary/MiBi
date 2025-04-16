import { motion } from 'framer-motion';
import { StyledText } from 'shared/styled/StyledText';
import { css, styled } from 'styled-components';

export const ThemeSwitcherWrapper = styled.div`
  width: 22px;
  height: 22px;
`;

export const IconWrapperMoon = styled(motion.div)<{ $svgSize?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $svgSize }) =>
    $svgSize &&
    css`
      svg {
        width: ${$svgSize}px;
        height: ${$svgSize}px;
      }
    `}
`;

export const IconWrapperSun = styled(motion.div)<{ $svgSize?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $svgSize }) =>
    $svgSize &&
    css`
      svg {
        width: ${$svgSize}px;
        height: ${$svgSize}px;
      }
    `}
`;

export const ThemeOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 4px;
  width: 100%;
`;

export const ThemeLabelText = styled(StyledText)`
  line-height: 140%;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.links.headerNavigationLinks.color.primary};
`;
