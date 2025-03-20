import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';

export const TableRowHiddenContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  will-change: height, opacity;
`;

export const BidBlockHiddenWrapper = styled(motion.div)<{ $side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  ${({ $side }) =>
    $side === 'left'
      ? css`
          padding: 16px 0 16px 16px;
        `
      : css`
          padding: 16px;
        `};
`;
