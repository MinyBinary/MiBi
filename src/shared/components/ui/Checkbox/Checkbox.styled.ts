import { fadeInStroke } from 'shared/styles/keyframes/keyframes';
import { Durations, EColors } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

const defaultColors = {
  defaultBorderColor: EColors.Black2,
  activeColor: EColors.Black2,
  activeHoverColor: EColors.Black3,
  hoverColor: EColors.Black3,
};

export const CheckboxLabel = styled.label<{
  $checked: boolean;
  $hoverColor?: EColors;
  $activeHoverColor?: EColors;
  $activeColor?: EColors;
  $borderColor?: EColors;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: transparent;
  transition: border ${Durations.Fast} ease-in-out;
  cursor: pointer;
  ${({ $borderColor, $hoverColor }) =>
    $borderColor
      ? css`
          border: 1px solid ${$borderColor};

          &:hover {
            border: 1px solid ${$hoverColor || defaultColors.hoverColor};
          }
        `
      : css`
          border: 1px solid ${defaultColors.defaultBorderColor};

          &:hover {
            border: 1px solid ${$hoverColor || defaultColors.hoverColor};
          }
        `}

  ${({ $checked, $activeHoverColor, $activeColor }) =>
    $checked &&
    css`
      ${$activeColor
        ? `border: 1px solid ${$activeColor};`
        : `border: 1px solid ${defaultColors.defaultBorderColor};`}

      & svg path {
        transition: stroke ${Durations.Fast} ease-in-out;
        ${$activeColor
          ? `stroke: ${$activeColor};`
          : `stroke: ${defaultColors.defaultBorderColor};`}
      }

      &:hover {

        & svg path {
          ${$activeHoverColor
            ? `stroke: ${$activeHoverColor};`
            : `stroke: ${defaultColors.activeHoverColor};`}
        }
        ${$activeHoverColor
          ? `border: 1px solid ${$activeHoverColor};`
          : `border: 1px solid ${defaultColors.defaultBorderColor};`}
      }
    `}
`;

export const CheckboxChecked = styled.div<{ $checked: boolean }>`
  display: inline-flex;
  opacity: 0;
  transition: opacity ${Durations.Normal} ease-in-out;

  ${({ $checked }) =>
    $checked &&
    css`
      opacity: 1;
      animation: ${fadeInStroke} ${Durations.Normal} ease-in-out forwards;
    `}
`;

export const CheckboxInput = styled.input`
  display: none;
`;
