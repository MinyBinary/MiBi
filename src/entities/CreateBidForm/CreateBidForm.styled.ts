import { Button } from 'shared/components/ui';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  border-radius: 4px;

  @media (min-width: ${BreakPointsV2.MobileMedium}) {
    background: ${({ theme }) => theme.forms.createBidForm.background.primary};
  }

  @media (max-width: ${BreakPointsV2.MobileMedium}) {
    padding: 0;
  }
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
  align-items: stretch;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${BreakPointsV2.Laptop13to15}) {
    gap: 24px;
    width: 664px;
  }

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    gap: 16px;
    width: 316px;
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
