import { styled } from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 100%;

  @media (width <= 616px) {
    width: 100%;
  }
`;
