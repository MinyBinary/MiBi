import styled from 'styled-components';

export const THead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.bidTable.header.border.primary};
  border-top: 1px solid ${({ theme }) => theme.bidTable.header.border.primary};
`;
