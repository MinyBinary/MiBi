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
  gap: 24px;
  width: 100%;
`;

export const FormBlocksWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-content: center;
  grid-template-areas:
    'inscription idea date bid'
    'create create create create';
  column-gap: 84px;
  row-gap: 24px;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    column-gap: 44px;
  }

  @media (width <= 1320px) {
    gap: 16px;
    grid-template-areas:
      'inscription idea'
      'date bid'
      'create create';
  }

  @media (width <= 616px) {
    --block-width: 280px;

    justify-content: stretch;
    grid-template-areas:
      'inscription'
      'idea'
      'date'
      'bid'
      'create';
    padding: 16px;
  }

  @media (width <= 450px) {
    padding: 0;
    column-gap: 16px;
    row-gap: 16px;
  }
`;

export const CreateBidButton = styled(Button)`
  grid-area: create;
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
