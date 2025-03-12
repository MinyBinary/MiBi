import { BreakPoint } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div`
  flex: 1 1 calc(25% - 74px);

  @media (max-width: ${BreakPoint.TabletTop}) {
    flex: 1 1 calc(50% - 24px);
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    flex: 1 1 100%;
  }
`;
