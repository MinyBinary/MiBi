import { Panel } from 'react-resizable-panels';
import { EColors, EFontFamily } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const PanelView = styled(Panel)`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  color: ${EColors.White1};
`;

export const TableHeader = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding: 16px;
  overflow: hidden;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${EColors.Black1};
  border-bottom: 1px solid ${EColors.Black5};
`;

export const TableItem = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding: 16px;
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  white-space: nowrap;
  color: ${EColors.Black1};
  border-bottom: 1px solid ${EColors.Black5};
`;
