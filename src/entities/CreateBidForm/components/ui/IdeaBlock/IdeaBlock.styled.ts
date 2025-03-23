import { Button, Select } from 'shared/components/ui';
import { BreakPoint } from 'shared/styles/style-variables';
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

export const AboveButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.buttons.above.color.inactive};

  ${({ $active }) =>
    $active &&
    css`
      border: 1px solid ${({ theme }) => theme.buttons.above.border.active};
      background: ${({ theme }) => theme.buttons.above.background.active};
    `}

  & > svg {
    max-width: 10px;
  }

  @media (min-width: ${BreakPoint.MobileTop}) {
    ${({ $active }) =>
      $active &&
      css`
        &:hover {
          border: 1px solid ${({ theme }) => theme.buttons.above.border.active};
        }
      `}

    &:active {
      border: 1px solid ${({ theme }) => theme.buttons.above.border.active};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    & > svg {
      max-width: 8px;
    }

    &:active {
      border: 1px solid ${({ theme }) => theme.buttons.above.border.active};
    }
  }
`;
export const BelowButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.buttons.below.color.inactive};

  ${({ $active }) =>
    $active &&
    css`
      border: 1px solid ${({ theme }) => theme.buttons.below.border.active};
      background: ${({ theme }) => theme.buttons.below.background.active};
    `}

  & > svg {
    max-width: 10px;
  }

  @media (min-width: ${BreakPoint.MobileTop}) {
    ${({ $active }) =>
      $active &&
      css`
        &:hover {
          border: 1px solid ${({ theme }) => theme.buttons.below.border.active};
        }
      `}

    &:active {
      border: 1px solid ${({ theme }) => theme.buttons.below.border.active};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    & > svg {
      max-width: 8px;
    }

    &:active {
      border: 1px solid ${({ theme }) => theme.buttons.below.border.active};
    }
  }
`;
