import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 100%;

  @media (max-width: ${BreakPointsV2.MobileMedium}) {
    width: 100%;
  }
`;
