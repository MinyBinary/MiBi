import { StyledText } from 'shared/styled/StyledText';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const WalletOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 32px;
`;

export const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: max-content;
`;

export const WalletOptionsTitle = styled(StyledText)`
  padding-bottom: 16px;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
`;

export const WalletInfoTitle = styled(StyledText)`
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  color: ${EColors.Black1};
`;
