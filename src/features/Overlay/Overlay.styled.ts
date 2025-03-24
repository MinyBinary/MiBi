import { Durations } from 'shared/styles/style-variables';
import styled from 'styled-components';

// Styled компонент для оверлея
export const Overlay = styled.div<{
  $visible: boolean;
  top: number;
  left: number;
  width: number;
  height: number;
  $activeElementId: string | null;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  background: ${({ theme }) => theme.popups.primary.overlay.primary};
  overflow: hidden;
  transition: opacity ${Durations.Fast} ease;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    z-index: -1;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    pointer-events: all;
  }

  ${({ $activeElementId }) =>
    $activeElementId &&
    `
    #${$activeElementId} {
      pointer-events: all; 
    }
  `}
`;
