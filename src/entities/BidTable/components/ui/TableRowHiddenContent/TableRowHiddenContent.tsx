import type { FC } from 'react';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Durations } from 'shared/styles/style-variables';

import * as S from './TableRowHiddenContent.styled';

interface IPropsTableRowHiddenContent {
  isHidden?: boolean;
}

export const TableRowHiddenContent: FC<IPropsTableRowHiddenContent> = ({ isHidden }) => {
  const [isHiddenContentOpen, setIsHiddenContentOpen] = useState(false);

  const animationProps = {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
    transition: {
      y: { duration: parseFloat(Durations.Fast), ease: 'linear' },
      opacity: { duration: parseFloat(Durations.Fast), ease: 'linear' },
    },
  };

  return (
    <React.Fragment>
      <S.TableRowHiddenContent $isHidden={isHidden}>
        <AnimatePresence>
          {!isHidden && (
            <>
              <S.BidBlockHiddenWrapper {...animationProps}>
                <S.BidBlockHidden
                  $isHidden={!isHiddenContentOpen}
                  onClick={() => setIsHiddenContentOpen(!isHiddenContentOpen)}
                >
                  As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                </S.BidBlockHidden>
              </S.BidBlockHiddenWrapper>
              <S.BidBlockHiddenWrapper {...animationProps}>
                <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                  As the sun dipped below the horizon, the sky made the moment unforgettable.
                </S.BidBlockHidden>
                <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                  As the sun dipped below the horizon, the sky
                </S.BidBlockHidden>
                <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                  As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                </S.BidBlockHidden>
              </S.BidBlockHiddenWrapper>
            </>
          )}
        </AnimatePresence>
      </S.TableRowHiddenContent>
    </React.Fragment>
  );
};
