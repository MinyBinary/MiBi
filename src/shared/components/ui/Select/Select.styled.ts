import { StyledText } from 'shared/styled/StyledText';
import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const Wrapper = styled.div<{
  $width?: number;
  $borderRadius?: string;
}>`
  position: relative;
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width}px;
      min-width: ${$width}px;
    `};
  ${({ $borderRadius }) => $borderRadius && `border-radius: ${$borderRadius};`};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  background: ${EColors.Back2};
  overflow: hidden;
  transition: all ${Durations.Fast} ease;
  cursor: pointer;

  &:hover {
    background: ${EColors.Gray3};
  }
`;

export const LabelText = styled(StyledText)<{ $textRight: boolean }>`
  width: 100%;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  color: ${EColors.White1};

  ${({ $textRight }) =>
    $textRight
      ? css`
          padding-right: 27.5px;
          text-align: right;
        `
      : css`
          text-align: left;
        `}
`;

export const PlaceholderText = styled(StyledText)`
  width: 100%;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${EColors.Black1};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const ArrowWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9px;
  min-width: 9px;
  height: 4.5px;
  min-height: 4.5px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0')});
  transition: transform ${Durations.Fast} ease-out;

  & > svg path {
    transition: stroke ${Durations.Normal} ease-out;
    stroke: ${EColors.Black1};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      & > svg path {
        stroke: ${EColors.White1};
      }
    `};
`;

export const Dropdown = styled.div<{ $isOpen: boolean; $dropDownHeight: number }>`
  position: absolute;
  top: 115%;
  z-index: 10;
  width: 100%;
  max-height: ${({ $isOpen, $dropDownHeight }) => ($isOpen ? `${$dropDownHeight}px ` : '0')};
  border-radius: 4px;
  background: ${EColors.Back2};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  overflow-y: auto;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  color: ${EColors.White1};
  transition:
    max-height ${Durations.Fast} ease,
    opacity ${Durations.Fast} ease,
    transform ${Durations.Fast} ease;
  transform: scaleY(${({ $isOpen }) => ($isOpen ? '1' : '0')});
  transform-origin: top;
  scrollbar-width: thin;
  scrollbar-color: ${EColors.Gray3} transparent;

  &::-webkit-scrollbar {
    width: 4px;
    background: ${EColors.Back2};
  }

  &::-webkit-scrollbar-thumb {
    background: ${EColors.Gray3};
  }
`;

export const Option = styled.div`
  padding: 12px;
  transition: all ${Durations.Fast} ease;
  cursor: pointer;

  &:hover {
    background: ${EColors.Gray3};
  }
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
