import { Button, Select } from 'shared/components/ui';
import styled from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const IdeaSelect = styled(Select)`
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

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const AboveButton = styled(Button)`
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.buttons.green.color.active};

  & > svg {
    width: 10px;
    height: 10px;
  }
`;
export const BelowButton = styled(Button)`
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.buttons.red.color.active};

  & > svg {
    width: 10px;
    height: 10px;
  }
`;
