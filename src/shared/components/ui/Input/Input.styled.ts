import { BreakPoint, Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const InputWrapper = styled.div<{ $width?: string | number; $hasValidationError?: boolean }>`
  display: flex;
  height: min-content;
  border: 1px solid ${({ theme }) => theme.inputs.primary.border.primary};
  border-radius: 4px;
  background: ${({ theme }) => theme.inputs.primary.background.primary};
  ${({ $width }) => $width && `width: ${$width}px;`}
  transition: border ${Durations.Fast} ease;
  ${({ $hasValidationError }) =>
    $hasValidationError &&
    css`
      border: 1px solid ${EColors.Red1};
    `};
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.inputs.primary.color.primary};
  outline: none;

  &::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.inputs.primary.color.secondary};
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;
