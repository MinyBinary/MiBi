import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const Button = styled.button<{ $itemsGap?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $itemsGap }) => ($itemsGap ? `${$itemsGap}px` : '6px')};
  padding: 12px 16px;
  border: 1px solid ${EColors.Gray2};
  border-radius: 4px;
  background: ${EColors.Gray2};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${EColors.White1};
  transition: all ${Durations.Fast} ease-in-out;
  cursor: pointer;

  & svg {
    max-width: 19px;
    max-height: 19px;

    & path {
      transition: all ${Durations.Fast} ease-in-out;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${EColors.Back3};

  &:hover {
    background: ${EColors.Black5};
  }
`;

export const BorderedButton = styled(Button)`
  padding: 11px 23px;
  border: 1px solid ${EColors.White1};
  background: transparent;
  box-sizing: border-box;
`;

export const AdvancedIcon = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
`;
