import { BreakPoint, Durations, EColors } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 140px;
`;

export const TokenTittleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.tittles.headerTittleTop.background.primary};
  text-align: center;
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
