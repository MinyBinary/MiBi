import { StyledText } from 'shared/styled/StyledText';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const InscriptionRowData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled(StyledText)`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.32px;
  color: ${EColors.Black1};
`;

export const UserComment = styled(UserName)`
  padding: 4px 8px;
  border-radius: 4px;
  background: ${EColors.Black1};
`;
