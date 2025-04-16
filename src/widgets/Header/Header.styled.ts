import { Durations, EColors, EZIndex } from 'shared/styles/style-variables';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import { styled } from 'styled-components';

export const Header = styled.header<{ $isMobile?: boolean }>`
  position: sticky;
  top: 16px;
  left: 0;
  z-index: ${EZIndex.Header};
  width: 100%;
  height: max-content;
  padding: 8px 0;
  background: ${({ theme }) => theme.global.background.alter};

  @media (min-width: ${BreakPointsV2.MobileLarge}) {
    padding: 16px 0;
    box-shadow: ${({ theme }) => theme.boxShadows.primary};
  }

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    top: 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    padding: 0;
  }
`;

export const MibiLogoWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: left;
  width: 161.5px;

  & > svg {
    max-width: 65px;
    max-height: 36px;
    cursor: pointer;
  }

  & > svg:hover {

    & path {
      transition: all ${Durations.Fast} ease-in-out;
      fill: ${EColors.Green4};
    }
  }

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    width: max-content;
  }
`;

export const MobileContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
