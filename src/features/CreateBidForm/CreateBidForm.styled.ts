import { Button, Input, Textarea } from 'shared/components/ui';
import { StyledText } from 'shared/styled/StyledText';
import { BreakPoint, Durations, EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CreateBidForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormBlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 74px;

  @media (max-width: ${BreakPoint.TabletTop}) {
    gap: 24px;
  }
`;

export const Block1 = styled.div`
  flex: 1 1 calc(25% - 74px);

  @media (max-width: ${BreakPoint.TabletTop}) {
    flex: 1 1 calc(50% - 24px);
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    flex: 1 1 100%;
  }
`;

export const BlockDescription = styled(StyledText)`
  line-height: 19.6px;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  color: ${EColors.Black1};
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

export const LabelText = styled(StyledText)<{ $isMaxSymbolsCount?: boolean }>`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
  color: ${EColors.Black1};
  transition: color ${Durations.Fast} ease;
  ${({ $isMaxSymbolsCount }) =>
    $isMaxSymbolsCount &&
    css`
      color: ${EColors.Red1};
    `};
`;

export const CommentTextArea = styled(Textarea)`
  height: 100px;
`;

export const UserNameInput = styled(Input)`
  &::placeholder {
    text-transform: uppercase;
  }
`;

export const CreateBidButton = styled(Button)`
  width: 100%;
  padding: 18px;
  text-transform: uppercase;
`;
