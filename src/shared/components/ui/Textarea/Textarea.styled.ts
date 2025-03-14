import { BreakPoint, EColors, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const AreaWrapper = styled.div<{ $hasValidationError?: boolean }>`
  position: relative;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  border: 1px solid ${EColors.Gray3};
  border-radius: 4px;
  background: ${EColors.Back2};

  ${({ $hasValidationError }) =>
    $hasValidationError &&
    css`
      border: 1px solid ${EColors.Red1};
    `};
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: inherit;
  background: transparent;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${EColors.White1};
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: ${EColors.Gray3} ${EColors.Back2};

  &::-webkit-scrollbar {
    width: 4px;
    background: ${EColors.Back2};
  }

  &::-webkit-scrollbar-thumb {
    background: ${EColors.Gray3};
  }

  &::-webkit-scrollbar-track {
    background: ${EColors.Back2};
  }

  &::placeholder {
    text-transform: uppercase;
    color: ${EColors.Black1};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
`;
