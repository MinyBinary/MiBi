import type { FC } from 'react';
import { HiddenBlock } from 'entities/BidTable/components/ui/HiddenBlock';
import { AnimatePresence } from 'framer-motion';
import { Durations } from 'shared/styles/style-variables';

import * as S from './TableRowHiddenContent.styled';

interface IPropsTableRowHiddenContent {
  isHidden?: boolean;
}

export const TableRowHiddenContent: FC<IPropsTableRowHiddenContent> = ({ isHidden }) => {
  const animationRowProps = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: {
      height: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
      opacity: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
    },
  };

  // const animationBlockProps = {
  //   initial: { y: -5, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  //   exit: { y: -100, opacity: 0 },
  //   transition: {
  //     y: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
  //     opacity: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
  //   },
  // };

  return (
    <AnimatePresence>
      {!isHidden && (
        <S.TableRowHiddenContent {...animationRowProps}>
          <S.BidBlockHiddenWrapper $side="left">
            <HiddenBlock>
              As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
            </HiddenBlock>
          </S.BidBlockHiddenWrapper>
          <S.BidBlockHiddenWrapper $side="right">
            <HiddenBlock>
              As the sun dipped below the horizon, the sky made the moment unforgettable.
            </HiddenBlock>
            <HiddenBlock>As the sun dipped below the horizon, the sky</HiddenBlock>
            <HiddenBlock>
              As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
            </HiddenBlock>
          </S.BidBlockHiddenWrapper>
        </S.TableRowHiddenContent>
      )}
    </AnimatePresence>
  );
};
