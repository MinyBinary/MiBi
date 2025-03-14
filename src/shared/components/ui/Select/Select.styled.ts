import { StyledText } from 'shared/styled/StyledText';
import { BreakPoint, Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: min-content;
  border: 1px solid ${EColors.Black2};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: inherit;
  background: ${EColors.Back2};
  overflow: hidden;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  transition: all ${Durations.Fast} ease;
  cursor: pointer;

  &:hover {
    background: ${EColors.Gray3};
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
`;

export const LabelText = styled(StyledText)<{ $textRight: boolean }>`
  width: 100%;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
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

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
`;

export const PlaceholderText = styled(StyledText)`
  width: 100%;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  text-align: left;
  color: ${EColors.Black1};

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
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
  right: -1px;
  z-index: 10;
  width: calc(100% + 2px);
  max-height: ${({ $isOpen, $dropDownHeight }) => ($isOpen ? `${$dropDownHeight}px ` : '0')};
  border: 1px solid ${EColors.Black4};
  border-radius: 4px;
  background: ${EColors.Back2};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  overflow-y: auto;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
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

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
  }
`;

export const Option = styled.div`
  padding: 12px 16px;
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
