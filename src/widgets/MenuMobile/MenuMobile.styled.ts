import { motion } from 'framer-motion';
import { StyledText } from 'shared/styled/StyledText';
import { BreakPointsV2, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const MenuMobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  background: ${({ theme }) => theme.popups.primary.overlay.primary};
`;

export const MenuMobileWrapper = styled(motion.div)<{ $offsetTop: number }>`
  position: fixed;
  top: ${({ $offsetTop }) => $offsetTop}px;
  right: 0;
  z-index: 999;
  height: 100%;
  background: ${({ theme }) => theme.menu.primary.background.primary};
`;

export const MobileMenuContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 16px;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  & > a {
    text-decoration: none;
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
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;

  @media (max-width: ${BreakPointsV2.MobileMedium}) {
    font-size: 28px;
  }

  ${({ $wordSpace }) =>
    $wordSpace &&
    css`
      word-spacing: ${$wordSpace}px;
    `}
`;
