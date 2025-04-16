import type { FC } from 'react';

import * as S from './PageTittle.styled';

export const PageTittle: FC = () => {
  return (
    <S.TextWrapper>
      <S.TittleWrapper>
        <S.TittleGray>Beta 1.0</S.TittleGray>
        <S.Tittle>Take it all if you're right!</S.Tittle>
      </S.TittleWrapper>
      <S.TittleGray>
        An original vision of the market distinguishes an experienced user from a beginner. Present
        your own idea or refute someone else's using MiBi! With just a few tokens, place your bid on
        the MiBi platform, or respond to an already existing one.
      </S.TittleGray>
    </S.TextWrapper>
  );
};
