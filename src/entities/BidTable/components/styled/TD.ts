import { EColors, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const TD = styled.td<{ $isSelected?: boolean; $isHidden?: boolean }>`
  display: table-cell;
  padding: 16px;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${EColors.White1};

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      padding: 0 16px;
      pointer-events: none;
    `}
`;
