import { StyledText } from 'shared/styled/StyledText';
import { EFontFamily } from 'shared/styles/style-variables';
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

export const Tittle = styled.h1`
  font-family: ${EFontFamily.SilkScreen};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.8px;
  letter-spacing: -0.64px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.tittles.mainPageTittle.color.primary};
`;

export const TittleGray = styled(StyledText)`
  max-width: 735px;
  line-height: 19.6px;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${({ theme }) => theme.tittles.mainPageTittle.color.secondary};
`;
