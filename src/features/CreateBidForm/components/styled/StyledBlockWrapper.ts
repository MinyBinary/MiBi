import { BreakPoint } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div<{ $gridArea?: string }>`
  position: relative;
  grid-area: ${({ $gridArea }) => $gridArea};
  width: 285px;

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: 100%;
  }
`;
