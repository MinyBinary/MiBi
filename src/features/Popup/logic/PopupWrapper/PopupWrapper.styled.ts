import { StyledText } from 'shared/styled/StyledText';
import { scaleInPopup } from 'shared/styles/keyframes/keyframes';
import { BreakPoint } from 'shared/styles/style-variables/breakpoints';
import { EColors } from 'shared/styles/style-variables/colors';
import { Durations } from 'shared/styles/style-variables/durations';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${EColors.Back4};
`;

export const Popup = styled.div`
  position: relative;
  padding: 24px;
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

export const PopupHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 0 0 24px;
`;

export const PopupTittle = styled(StyledText)`
  max-width: 350px;
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  color: ${EColors.White1};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 16px;
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
