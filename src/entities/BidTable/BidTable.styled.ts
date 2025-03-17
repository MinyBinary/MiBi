import { PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Durations, EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const BidTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export const PanelGroupView = styled(PanelGroup)`
  width: 100%;
`;

export const PanelResizeHandleView = styled(PanelResizeHandle)`
  width: 4px;
  background: ${EColors.Back3};
  transition: all ${Durations.Medium} ease;

  &:hover {
    background: ${EColors.Back2};
  }
`;
