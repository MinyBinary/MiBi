import { BreakPoint } from 'shared/styles/style-variables';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import { styled } from 'styled-components';

export const AppLayout = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 24px;

  @media (min-width: ${BreakPoint.MobileTop}) {
    max-width: ${BreakPoint.DesktopLow};
  }

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    padding: 16px;
    padding-top: 180px;
  }
`;
