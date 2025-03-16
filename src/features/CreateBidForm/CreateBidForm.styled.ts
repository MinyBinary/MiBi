import { Button } from 'shared/components/ui';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CreateBidForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const FormBlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${BreakPointsV2.Laptop13to15}) {
    gap: 16px;
  }

  @media (max-width: ${BreakPointsV2.TabletLandscape}) {
    gap: 16px;
    width: 588px;
  }

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    gap: 16px;
    width: 285px;
  }

  @media (max-width: ${BreakPointsV2.MobileMedium}) {
    gap: 16px;
    width: 100%;
  }
`;

export const CreateBidButton = styled(Button)`
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
