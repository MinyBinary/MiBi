import { StyledText } from 'shared/styled/StyledText';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const TittleText = styled(StyledText)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
  text-transform: capitalize;
  color: ${EColors.White1};
`;

export const TittleWithColor = styled(TittleText)<{ $color?: string }>`
  ${({ $color }) => $color && `color: ${$color}; `};
`;
