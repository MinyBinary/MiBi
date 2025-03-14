import { StyledText } from 'shared/styled/StyledText';
import { fadeInBackground } from 'shared/styles/keyframes/keyframes';
import { Durations, EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const ValidationErrorText = styled(StyledText)`
  position: absolute;
  bottom: -14px;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.28px;
  color: ${EColors.Red1};
  animation: ${fadeInBackground} ${Durations.Fast} ease;
`;
