import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const DateRowData = styled.div`
  display: flex;
`;

export const RowDate = styled(StyledText)`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.bidTable.row.date.color.primary};
`;
