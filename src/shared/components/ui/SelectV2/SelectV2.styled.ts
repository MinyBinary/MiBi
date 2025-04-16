import { EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1.5px solid ${({ theme }) => theme.selects.primary.border.primary};
  border-radius: 4px;
  user-select: none;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: ${({ theme }) => theme.selects.primary.background.hover};
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;

export const SelectOptions = styled.div<{ $right?: boolean }>`
  position: absolute;
  top: 110%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${({ $right }) =>
    $right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};
  width: max-content;
  border: 1px solid ${({ theme }) => theme.selects.primary.border.primary};
  border-radius: 4px;
  background: ${({ theme }) => theme.global.background.default};
  overflow: hidden;
  overflow-y: auto;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.selects.primary.color.primary};
`;

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${({ theme }) => theme.selects.primary.background.alterPrimary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.selects.primary.background.alterHover};
  }
`;
