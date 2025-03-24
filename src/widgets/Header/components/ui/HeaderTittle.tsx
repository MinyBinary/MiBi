import type { FC } from 'react';

import * as S from './HeaderTittle.styled';

export const HeaderTittle: FC = () => {
  return (
    <S.TittleText>
      // UNTIL <S.TittleWithColor>MiBi</S.TittleWithColor> HALVING [0x1000000
      <S.TittleWithColor> MiBi</S.TittleWithColor>] GET ADDITIONAL
      <S.TittleWithColor> 992 MiBi</S.TittleWithColor> IF YOU'RE RIGHT OR
      <S.TittleWithColor> 32 MiBi</S.TittleWithColor> IF YOU’RE NOT
    </S.TittleText>
  );
};
