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
  --block-width: 285px;

  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, var(--block-width));
  grid-template-rows: repeat(1, 1fr);
  column-gap: 84px;
  row-gap: 24px;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    column-gap: 44px;
  }

  @media (width <= 1320px) {
    grid-template-columns: repeat(2, var(--block-width));
    grid-template-rows: repeat(2, 1fr);
  }

  @media (width <= 650px) {
    --block-width: 280px;

    grid-template-columns: repeat(1, min(var(--block-width), 100%));
    grid-template-rows: repeat(4, 1fr);
    padding: 16px;
    column-gap: 16px;
    row-gap: 16px;
  }

  @media (width <= 450px) {
    grid-template-columns: repeat(1, min(100vw, 100%));
    padding: 0;
    column-gap: 16px;
    row-gap: 16px;
  }
`;

export const CreateBidButton = styled(Button)`
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
