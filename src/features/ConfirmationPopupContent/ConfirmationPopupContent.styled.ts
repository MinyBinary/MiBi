import { Button } from 'shared/components/ui';
import { StyledText } from 'shared/styled/StyledText';
import { BreakPointsV2 } from 'shared/styles/style-variables';
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
  color: ${({ theme }) => theme.popups.confirmation.color.primary};

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
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
  color: ${({ theme }) => theme.popups.confirmation.color.secondary};
`;

export const ConfirmationButton = styled(Button)<{ $isDisabled?: boolean }>`
  border: 1px solid ${({ theme }) => theme.buttons.confirm.border.default};
  background: ${({ theme }) => theme.buttons.confirm.background.default};
  text-transform: uppercase;
  color: ${({ theme }) => theme.buttons.confirm.color.default};

  &:hover {
    border: 1px solid ${({ theme }) => theme.buttons.confirm.border.default};
    background: ${({ theme }) => theme.buttons.confirm.background.default};
    text-transform: uppercase;
    color: ${({ theme }) => theme.buttons.confirm.color.default};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.buttons.confirm.border.disable};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border: 1px solid ${({ theme }) => theme.buttons.confirm.border.default};
      background: ${({ theme }) => theme.buttons.confirm.background.default};
      text-transform: uppercase;
      color: ${({ theme }) => theme.buttons.confirm.color.default};

      &:hover {
        border: 1px solid transparent;
      }
    `}

  @media (max-width: ${BreakPointsV2.MobileLarge}) {
    font-size: 12px;
    line-height: 16.8px;
  }
`;
