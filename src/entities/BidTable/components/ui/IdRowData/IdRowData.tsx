import type { FC } from 'react';

import * as S from './IdRowData.styled';

interface IPropsIdRowData {
  id: string;
}

export const IdRowData: FC<IPropsIdRowData> = ({ id }) => {
  return <S.IdRowData>{id}</S.IdRowData>;
};
