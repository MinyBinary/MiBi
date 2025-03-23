import { Durations, EFontFamily } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

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

  &:hover {
    background: ${({ theme }) => theme.buttons.primary.background.hover};
  }

  &:active {
    background: ${({ theme }) => theme.buttons.primary.background.active};
  }

  & svg {
    max-width: 19px;
    max-height: 19px;

    & path {
      transition: all ${Durations.Fast} ease-in-out;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.buttons.secondary.background.default};
  color: ${({ theme }) => theme.buttons.secondary.color};

  &:active {
    background: ${({ theme }) => theme.buttons.secondary.background.disable};
  }

  &:disabled {
    background: ${({ theme }) => theme.buttons.secondary.background.disable};
  }

  &:hover {
    background: ${({ theme }) => theme.buttons.secondary.background.hover};
  }
`;

export const BorderedButton = styled(Button)`
  padding: 11px 23px;
  border: 1px solid ${({ theme }) => theme.buttons.primary.border.inactive};

  &:hover {
    border: 1px solid ${({ theme }) => theme.buttons.primary.border.hover};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.buttons.primary.border.active};
  }

  background: transparent;
`;

export const AdvancedIcon = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
`;
