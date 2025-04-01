import { motion } from 'framer-motion';
import { StyledText } from 'shared/styled/StyledText';
import { EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const MenuMobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  background: ${({ theme }) => theme.popups.primary.overlay.primary};
`;

export const MenuMobileWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  height: 100%;
  background: ${({ theme }) => theme.popups.primary.background.primary};
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
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
