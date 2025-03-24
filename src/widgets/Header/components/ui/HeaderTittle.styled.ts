import { StyledText } from 'shared/styled/StyledText';
import styled from 'styled-components';

export const TittleText = styled(StyledText)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.tittles.headerTittleTop.color.primary};
`;

export const TittleWithColor = styled(TittleText)`
  color: ${({ theme }) => theme.tittles.headerTittleTop.color.secondary};
`;
