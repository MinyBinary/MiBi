import { StyledText } from 'shared/styled/StyledText';
import { EColors } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const BlockDescription = styled(StyledText)`
  line-height: 19.6px;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  color: ${EColors.Black1};
`;
