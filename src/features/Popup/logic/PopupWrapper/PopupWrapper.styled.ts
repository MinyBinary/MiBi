
import { Animations } from 'shared/styles/animations/animations'
import { BreakPoint } from 'shared/styles/style-variables/breakpoints';
import { EColors } from 'shared/styles/style-variables/colors';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${EColors.Back4};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animations.fadeIn};
`;

export const Popup = styled.div`
  background: ${EColors.Back2};
  padding: 48px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  animation: ${Animations.scaleIn};

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
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  right: 14px;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: transparent;
  border: none;
`;
