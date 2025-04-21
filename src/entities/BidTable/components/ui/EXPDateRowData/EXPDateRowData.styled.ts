import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const EXPDateRowData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowDate = styled(StyledText)`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.bidTable.row.expDate.color.primary};
`;

export const RowDateText = styled(RowDate)`
  color: ${({ theme }) => theme.bidTable.row.expDate.color.secondary};
`;
