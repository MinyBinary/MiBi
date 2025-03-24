import { StyledText } from 'shared/styled/StyledText';
import { BreakPoint, EFontFamily } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  gap: 44px;

  & a {
    text-decoration: none;
  }

  @media (max-width: ${BreakPoint.TabletTop}) {
    gap: 16px;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    display: none;
  }
`;

export const LinkItem = styled(StyledText)<{ $active?: boolean; $wordSpace?: number }>`
  ${({ $active }) =>
    $active
      ? css`
          color: ${({ theme }) => theme.links.headerNavigationLinks.color.secondary};
        `
      : css`
          color: ${({ theme }) => theme.links.headerNavigationLinks.color.primary};
        `};
  font-family: ${EFontFamily.GeistMono};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px;
  text-transform: uppercase;

  ${({ $wordSpace }) =>
    $wordSpace &&
    css`
      word-spacing: ${$wordSpace}px;
    `}
`;
