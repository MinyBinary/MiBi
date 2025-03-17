import { type FC } from 'react';
import { BidTable } from 'entities/BidTable';
import { CreateBidForm } from 'entities/CreateBidForm';

import { PageTittle } from './components/ui/PageTittle/PageTittle';

import * as S from './Intro.styled';

export const Intro: FC = () => {
  return (
    <S.IntroPageContentWrapper>
      <PageTittle />
      <CreateBidForm />
      <BidTable />
    </S.IntroPageContentWrapper>
  );
};
