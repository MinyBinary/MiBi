import { Select } from 'shared/components/ui';
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const BidSelect = styled(Select)`
  display: flex;
  width: 100%;
  border-radius: 4px;

  & > button {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.28px;
  }
`;
