import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const IdeaRowData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Pair = styled(StyledText)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.bidTable.row.idea.color.primary};

  & > svg {
    width: 8px;
    height: 8px;
  }
`;

export const AboveRateValue = styled(Pair)`
  color: ${({ theme }) => theme.bidTable.row.idea.color.above};
`;

export const BelowRateValue = styled(Pair)`
  color: ${({ theme }) => theme.bidTable.row.idea.color.below};
`;
