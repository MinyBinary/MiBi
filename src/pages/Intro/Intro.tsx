import { type FC } from 'react';
import { BidTable } from 'entities/BidTable';
import { CreateBidForm } from 'entities/CreateBidForm';
import { AnimatePresence } from 'framer-motion';
import { Durations } from 'shared/styles/style-variables';

import { PageTittle } from './components/ui/PageTittle/PageTittle';

import * as S from './Intro.styled';

export const Intro: FC = () => {
  const animationProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {
      duration: parseFloat(Durations.Fast),
      ease: 'easeOut',
    },
  };

  return (
    <AnimatePresence>
      <S.IntroPageContentWrapper {...animationProps}>
        <PageTittle />
        <CreateBidForm />
        <BidTable />
      </S.IntroPageContentWrapper>
    </AnimatePresence>
  );
};
