import { BreakPoint, Durations, EColors } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const Header = styled.header<{ $isMobile?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: max-content;
  padding: 16px 0;
  background: ${({ theme }) => theme.global.background.alter};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MibiLogoWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: left;
  width: 161.5px;

  & > svg {
    max-width: 81px;
    max-height: 61px;
    cursor: pointer;
  }

  & > svg:hover {

    & path {
      transition: all ${Durations.Fast} ease-in-out;
      fill: ${EColors.Green4};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: max-content;
  }
`;
