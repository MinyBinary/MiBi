import { StyledText } from 'shared/styled/StyledText';
import { BreakPoint, Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  gap: 16px;

  & a {
    text-decoration: none;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    display: none;
  }
`;

export const LinkItem = styled(StyledText)<{ $active?: boolean }>`
  ${({ $active }) => ($active ? `color: ${EColors.Green1};` : `color: ${EColors.White1};`)};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px;
  text-transform: uppercase;

  &:hover {
    transition: all ${Durations.Fast} ease-in-out;
    ${({ $active }) => ($active ? `color: ${EColors.Green4};` : `color: ${EColors.White2};`)};
  }
`;
