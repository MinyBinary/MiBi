import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background: ${EColors.Gray2};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${EColors.White1};
  transition: all ${Durations.Fast} ease-in-out;
  cursor: pointer;

  & svg {
    max-width: 24px;
    max-height: 24px;
  }

  &:hover {
    background: ${EColors.Gray1};
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

  &:hover {
    background: ${EColors.Gray2};
  }
`;
