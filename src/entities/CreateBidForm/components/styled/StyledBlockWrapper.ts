import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 285px;

  @media (max-width: ${BreakPointsV2.MobileSmall}) {
    width: 100%;
  }
`;
