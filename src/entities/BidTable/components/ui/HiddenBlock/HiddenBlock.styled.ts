import { css, styled } from 'styled-components';

export const HiddenBlock = styled.div<{ $isHidden?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      height: 90px;
    `};
  cursor: pointer;
  pointer-events: all;
`;

export const HiddenBlockContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 250px;
  padding: 16px;
  background: ${({ theme }) => theme.bidTable.row.entry.background.secondary};
  word-break: break-all;
  color: ${({ theme }) => theme.bidTable.row.entry.color.primary};
`;
