import { BreakPoint, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const AreaWrapper = styled.div<{ $hasValidationError?: boolean }>`
  position: relative;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  border-radius: 4px;

  ${({ $hasValidationError }) =>
    $hasValidationError &&
    css`
      border: 1px solid ${({ theme }) => theme.textAreas.primary.border.error};
    `};
`;

export const Textarea = styled.textarea`
  height: 100%;
  padding: 12px 16px;
  border: none;
  border: 1px solid ${({ theme }) => theme.textAreas.primary.border.primary};
  border-radius: inherit;
  background: transparent;
  background: ${({ theme }) => theme.textAreas.primary.background.primary};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.textAreas.primary.color.primary};
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.textAreas.primary.color.secondary}
    ${({ theme }) => theme.textAreas.primary.background.primary};

  &::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.textAreas.primary.background.primary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textAreas.primary.background.primary};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.textAreas.primary.background.primary};
  }

  &::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.textAreas.primary.color.secondary};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
`;
