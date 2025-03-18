import { EColors, EFontFamily } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const TH = styled.th`
  padding: 16px;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  text-align: left;
  text-transform: uppercase;
  color: ${EColors.Black1};
`;
