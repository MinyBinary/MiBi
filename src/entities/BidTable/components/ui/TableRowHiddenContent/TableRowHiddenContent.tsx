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
    initial: { maxHeight: 0, opacity: 0 },
    animate: { maxHeight: 1000, opacity: 1 },
    exit: { maxHeight: 0, opacity: 0 },
    transition: {
      maxHeight: { duration: parseFloat(Durations.Fast), ease: 'linear' },
      opacity: { duration: parseFloat(Durations.Fast), ease: 'linear' },
    },
  };

  const animationBlockProps = {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
    transition: {
      y: { duration: parseFloat(Durations.Fast), ease: 'linear' },
      opacity: { duration: parseFloat(Durations.Fast), ease: 'linear' },
    },
  };

  return (
    <AnimatePresence>
      {!isHidden && (
        <S.TableRowHiddenContent {...animationRowProps}>
          <S.BidBlockHiddenWrapper {...animationBlockProps}>
            <HiddenBlock>
              As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
            </HiddenBlock>
          </S.BidBlockHiddenWrapper>
          <S.BidBlockHiddenWrapper {...animationBlockProps}>
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
