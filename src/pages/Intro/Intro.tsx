import { type FC } from 'react';

import * as S from './Intro.styled';

export const Intro: FC = () => {
  return (
    <S.IntroWrapper>
      <S.PageTittleWrapper>
        <S.TittleGray>Beta 1.0</S.TittleGray>
        <S.PageTittle>Take it all if you're right!</S.PageTittle>
      </S.PageTittleWrapper>
      <S.TittleGray>
        An original vision of the market distinguishes an experienced user from a beginner. Present
        your own idea or refute someone else's using MiBi! With just a few tokens, place your bid on
        the MiBi platform, or respond to an already existing one. Take it all if you're right!
      </S.TittleGray>
    </S.IntroWrapper>
  );
};
