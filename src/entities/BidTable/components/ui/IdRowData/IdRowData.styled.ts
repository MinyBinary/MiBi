import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const IdRowData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Id = styled(StyledText)`
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.bidTable.row.id.color.primary};
`;

export const SubMenu = styled.div`
  display: flex;
  gap: 2px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
