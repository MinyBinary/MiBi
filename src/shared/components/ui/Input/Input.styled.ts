import { StyledText } from 'shared/styled/StyledText';
import { fadeInBackground } from 'shared/styles/keyframes/keyframes';
import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const InputWrapper = styled.div<{ $width?: string | number; $hasValidationError?: boolean }>`
  position: relative;
  display: flex;
  border: 1px solid ${EColors.Gray3};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${EColors.Back2};
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
  padding: 12px 16px;
  border: none;
  border-radius: 4px 0 0 4px;
  background: transparent;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${EColors.White1};
  outline: none;

  &::placeholder {
    color: ${EColors.Black1};
  }
`;

export const ValidationErrorText = styled(StyledText)`
  position: absolute;
  bottom: -16px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${EColors.Red1};
  animation: ${fadeInBackground} ${Durations.Fast} ease;
`;
