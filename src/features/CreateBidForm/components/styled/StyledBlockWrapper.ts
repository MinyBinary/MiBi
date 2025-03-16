import { styled } from 'styled-components';

export const BlockWrapper = styled.div<{ $gridArea?: string }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ $gridArea }) => $gridArea};
  min-width: 285px;
  height: 100%;

  @media (width <= 450px) {
    min-width: 100%;
  }
`;
