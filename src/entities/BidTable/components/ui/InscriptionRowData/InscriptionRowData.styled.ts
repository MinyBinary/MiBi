import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const InscriptionRowData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled(StyledText)`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.bidTable.row.inscription1.color.primary};
`;

export const UserComment = styled(UserName)`
  padding: 3px 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bidTable.row.inscription1.background.primary};
`;
