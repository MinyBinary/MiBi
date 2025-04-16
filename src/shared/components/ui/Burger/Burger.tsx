import type { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Durations } from 'shared/styles/style-variables';

import * as S from './Burger.styled';

interface IPropsBurger extends React.HTMLAttributes<HTMLDivElement> {
  isClicked: boolean;
}

export const Burger: FC<IPropsBurger> = ({ isClicked, ...props }) => {
  const firstLineAnimateProps = {
    animate: {
      transform: isClicked
        ? 'translate(-50%, -50%) rotate(45deg)'
        : 'translate(-50%, -8px) rotate(0deg)',
    },
    transition: { duration: parseFloat(Durations.Fast) },
  };

  const secondLineAnimateProps = {
    animate: {
      opacity: isClicked ? 0 : 1,
      width: isClicked ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
    },
    transition: { duration: 0.1 },
  };

  const thirdLineAnimateProps = {
    animate: {
      transform: isClicked
        ? 'translate(-50%, -50%) rotate(-45deg)'
        : 'translate(-50%, 6px) rotate(0deg)',
    },
    transition: { duration: parseFloat(Durations.Fast) },
  };

  return (
    <S.BurgerBox {...props}>
      <AnimatePresence>
        <S.BurgerLine key="burger-line-first" {...firstLineAnimateProps} />
        <S.BurgerLine key="burger-line-second" {...secondLineAnimateProps} />
        <S.BurgerLine key="burger-line-third" {...thirdLineAnimateProps} />
      </AnimatePresence>
    </S.BurgerBox>
  );
};
