import { Durations, EColors } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const HiddenBlock = styled.div<{ $isHidden?: boolean }>`
  width: 100%;
  height: 250px;
  padding: 16px;
  border-radius: 8px;
  background: ${EColors.Back2};
  overflow: hidden;
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      height: 90px;
    `};
  word-break: break-all;
  color: ${EColors.White1};
  transition: height ${Durations.Fast} ease;
  cursor: pointer;
  pointer-events: all;
`;
