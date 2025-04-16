import { StyledText } from 'shared/styled/StyledText';
import { scaleInPopup } from 'shared/styles/keyframes/keyframes';
import { EZIndex } from 'shared/styles/style-variables';
import { BreakPoint } from 'shared/styles/style-variables/breakpoints';
import { EColors } from 'shared/styles/style-variables/colors';
import { Durations } from 'shared/styles/style-variables/durations';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${EZIndex.Popup};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.popups.primary.overlay.primary};

  @media (max-width: ${BreakPoint.MobileTop}) {
    padding: 16px;
  }
`;

export const Popup = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.popups.primary.background.primary};
  animation: ${scaleInPopup} ${Durations.Fast} ease-out forwards;
  box-sizing: border-box;

  @media (min-width: ${BreakPoint.MobileTop}) {
    width: 378px;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: 100%;
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

export const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

export const CloseButton = styled.button`
  width: max-content;
  height: max-content;
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
