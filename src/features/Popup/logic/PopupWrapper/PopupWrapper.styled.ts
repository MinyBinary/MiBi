import { scaleInPopup } from 'shared/styles/keyframes/keyframes';
import { BreakPoint } from 'shared/styles/style-variables/breakpoints';
import { EColors } from 'shared/styles/style-variables/colors';
import { Durations } from 'shared/styles/style-variables/durations';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${EColors.Back4};
`;

export const Popup = styled.div`
  position: relative;
  padding: 48px 24px;
  border-radius: 4px;
  background: ${EColors.Back2};
  animation: ${scaleInPopup} ${Durations.Fast} ease-out forwards;
  box-sizing: border-box;

  @media (min-width: ${BreakPoint.MobileTop}) {
    width: 378px;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  & > svg path {
    fill: ${EColors.Black1};
    transition: fill ${Durations.Fast} ease-in-out;
  }

  &:hover svg path {
    fill: ${EColors.White2};
  }
`;
