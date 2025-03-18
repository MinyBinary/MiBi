import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const TR = styled.tr<{ $isSelected?: boolean; $isHidden?: boolean }>`
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${EColors.White1};
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      pointer-events: none;
    `}
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background: ${EColors.Back3};
    `}
  transition: background ${Durations.Fast} ease-in-out;

  &:hover {
    background: ${EColors.Back3};
    cursor: pointer;
  }
`;
