import { StyledText } from 'shared/styled/StyledText';
import { EColors, EFontFamily } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TittleGray = styled(StyledText)`
  max-width: 735px;
  font-weight: 400;
  line-height: 19.6px;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${EColors.Black1};
`;

export const Tittle = styled.h1`
  font-family: ${EFontFamily.SilkScreen};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.8px;
  letter-spacing: -0.64px;
  text-align: center;
  text-transform: uppercase;
  color: ${EColors.White1};
`;
