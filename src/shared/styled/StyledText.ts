import { EFontFamily } from 'shared/styles/style-variables/font-family';
import { styled } from 'styled-components';

export const StyledText = styled.span`
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1px;
  color: ${({ theme }) => theme.global.color.primary};
`;
