import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const TableRowHiddenContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
`;

export const BidBlockHiddenWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;
