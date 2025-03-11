import type { FC } from 'react';
import { EColors } from 'shared/styles/style-variables';

import * as S from './HeaderTittle.styled';

export const HeaderTittle: FC = () => {
  return (
    <S.TittleText>
      // UNTIL <S.TittleWithColor $color={EColors.Green1}>MiBi</S.TittleWithColor> HALVING
      [0x1000000 <S.TittleWithColor $color={EColors.Green1}>MiBi</S.TittleWithColor>] GET ADDITIONAL{' '}
      <S.TittleWithColor $color={EColors.Green1}>992 MiBi</S.TittleWithColor> IF YOU'RE RIGHT, OR{' '}
      <S.TittleWithColor $color={EColors.Green1}>32 MiBi</S.TittleWithColor> IF YOU’RE NOT
    </S.TittleText>
  );
};
