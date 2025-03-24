import { Durations, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const Button = styled.button<{ $itemsGap?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $itemsGap }) => ($itemsGap ? `${$itemsGap}px` : '6px')};
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.buttons.primary.background.inactive};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.buttons.primary.color.inactive};
  transition: all ${Durations.Fast} ease-in-out;
  cursor: pointer;

  & svg {
    width: 19px;
    height: 19px;

    & path {
      fill: ${({ theme }) => theme.buttons.primary.fill.inactive};
      transition: all ${Durations.Fast} ease-in-out;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.buttons.secondary.background.default};
  color: ${({ theme }) => theme.buttons.secondary.color};

  &:hover {
    background: ${({ theme }) => theme.buttons.secondary.background.hover};
    color: ${({ theme }) => theme.buttons.secondary.color};
  }

  &:disabled {
    background: ${({ theme }) => theme.buttons.secondary.background.disable};
    color: ${({ theme }) => theme.buttons.secondary.color};
  }
`;

export const BorderedButton = styled(Button)`
  padding: 11px 23px;
  border: 1px solid ${({ theme }) => theme.buttons.bordered.border.default};
  background: transparent;
  color: ${({ theme }) => theme.buttons.bordered.color.default};

  &:hover {
    border: 1px solid ${({ theme }) => theme.buttons.bordered.border.hover};
    color: ${({ theme }) => theme.buttons.bordered.color.hover};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.buttons.bordered.border.disable};
  }
`;

export const Green = styled(Button)<{ $active?: boolean }>`
  border: 1px solid ${({ theme }) => theme.buttons.green.border.inactive};
  background: transparent;
  color: ${({ theme }) => theme.buttons.green.color.inactive};

  &:hover {
    border: 1px solid ${({ theme }) => theme.buttons.green.border.hover};
  }

  & svg {

    & path {
      fill: ${({ theme }) => theme.buttons.green.fill.inactive};
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      border: 1px solid ${({ theme }) => theme.buttons.green.border.active};
      background: ${({ theme }) => theme.buttons.green.background.active};

      &:hover {
        border: 1px solid ${({ theme }) => theme.buttons.green.border.active};
      }

      & svg {

        & path {
          fill: ${({ theme }) => theme.buttons.green.fill.active};
        }
      }
    `}
`;

export const Red = styled(Button)<{ $active?: boolean }>`
  border: 1px solid ${({ theme }) => theme.buttons.red.border.inactive};
  background: transparent;
  color: ${({ theme }) => theme.buttons.red.color.inactive};

  &:hover {
    border: 1px solid ${({ theme }) => theme.buttons.red.border.hover};
  }

  & svg {

    & path {
      fill: ${({ theme }) => theme.buttons.red.fill.inactive};
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      border: 1px solid ${({ theme }) => theme.buttons.red.border.active};
      background: ${({ theme }) => theme.buttons.red.background.active};

      &:hover {
        border: 1px solid ${({ theme }) => theme.buttons.red.border.active};
      }

      & svg {

        & path {
          fill: ${({ theme }) => theme.buttons.red.fill.active};
        }
      }
    `}
`;

export const AdvancedIcon = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
`;
