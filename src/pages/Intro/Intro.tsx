import { type FC } from 'react';
import { CreateBidForm } from 'features/CreateBidForm';

import { PageTittle } from './components/ui/PageTittle/PageTittle';

import * as S from './Intro.styled';

export const Intro: FC = () => {
  return (
    <S.IntroPageContentWrapper>
      <PageTittle />
      <CreateBidForm />
    </S.IntroPageContentWrapper>
  );
};
