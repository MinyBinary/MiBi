import { Button } from 'shared/components/ui';
import { StyledText } from 'shared/styled/StyledText';
import { BreakPoint, EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const ConfirmationPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ConfirmationText = styled(StyledText)`
  font-size: 14px;
  line-height: 19.6px;
  letter-spacing: -0.28px;
  color: ${EColors.Black1};

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
    line-height: 16.8px;
  }
`;

export const ConfirmationAgreementWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
`;

export const ConfirmationTextWhite = styled(ConfirmationText)`
  color: ${EColors.White1};
`;

export const ConfirmationButton = styled(Button)<{ $isDisabled?: boolean }>`
  border: 1px solid ${EColors.Green1};
  background: ${EColors.Green5};
  text-transform: uppercase;
  color: ${EColors.Green1};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border: 1px solid ${EColors.Black1};
      background: transparent;
      color: ${EColors.Black1};
      pointer-events: none;
    `}

  @media (min-width: ${BreakPoint.MobileTop}) {

    &:hover {
      border: 1px solid ${EColors.Green4};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
    line-height: 16.8px;
  }
`;
