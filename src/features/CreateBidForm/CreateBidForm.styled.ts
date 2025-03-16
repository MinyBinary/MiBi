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
  -webkit-display: grid;
  -moz-display: grid;
  -ms-display: grid;
  display: grid;
  align-items: stretch;
  justify-content: space-between;
  grid-template-areas:
    'inscription idea date bid'
    'create create create create';
  grid-template-rows: 1fr min-content;
  row-gap: 24px;
  box-sizing: border-box;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    column-gap: 24px;
  }

  @media (width <= 1260px) {
    justify-content: center;
    gap: 16px;
    grid-template-areas:
      'inscription idea'
      'date bid'
      'create create';
    grid-template-rows: 1fr 1fr min-content;
  }

  @media (width <= 616px) {
    justify-content: stretch;
    grid-template-areas:
      'inscription'
      'idea'
      'date'
      'bid'
      'create';
    grid-template-rows: 1fr 1fr 1fr 1fr min-content;
  }

  @media (width <= 450px) {
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
