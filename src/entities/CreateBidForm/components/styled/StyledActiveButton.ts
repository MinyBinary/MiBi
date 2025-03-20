import { Button } from 'shared/components/ui';
import { BreakPoint, EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const StyledActiveButton = styled(Button)<{ $active?: boolean }>`
  position: relative;
  width: 100%;
  padding: 12px;
  border-color: ${EColors.Black4};
  border-radius: 4px;
  color: ${EColors.White1};

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${EColors.Green1};
      background: ${EColors.Green5};
      color: ${EColors.Green1};

      & > svg path {
        fill: ${EColors.Green1};
      }
    `}

  @media (min-width: ${BreakPoint.MobileTop}) {

    &:hover {
      border-color: ${EColors.Green4};
    }

    &:active {
      border-color: ${EColors.Green1};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;

    & > svg {
      max-width: 8px;
    }
  }
`;
