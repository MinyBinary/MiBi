import { Button } from 'shared/components/ui';
import { BreakPoint } from 'shared/styles/style-variables';
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
  justify-content: space-between;
  gap: 24px;
  box-sizing: border-box;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    gap: 16px;
  }

  @media (width <= 1260px) {
    justify-content: center;
    gap: 16px;
    width: 588px;
  }

  @media (width <= 616px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  @media (width <= 450px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
`;

export const CreateBidButton = styled(Button)`
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
