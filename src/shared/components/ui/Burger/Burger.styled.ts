import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const BurgerBox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BurgerLine = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 1px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.global.color.primary};
  transform-origin: center;
`;
