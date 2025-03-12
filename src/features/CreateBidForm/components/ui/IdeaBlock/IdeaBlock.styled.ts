import { Button, Select } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';
// import { EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const IdeaSelect = styled(Select)`
  display: flex;
  width: 100%;
  border-radius: 4px;

  & > button {
    padding: 12px 16px;
    text-transform: uppercase;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const RangeButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  text-transform: uppercase;

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${EColors.Green1};
      background: ${EColors.Green5};
      color: ${EColors.Green1};
    `}
`;
export const DateButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  text-transform: uppercase;

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${EColors.Green1};
      background: ${EColors.Green5};
      color: ${EColors.Green1};
    `}
`;
