import { Input, Textarea } from 'shared/components/ui';
import { StyledText } from 'shared/styled/StyledText';
import { Durations, EColors } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled(StyledText)<{ $isMaxSymbolsCount?: boolean }>`
  position: absolute;
  right: 0;
  bottom: -14px;
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
