import type { FC } from 'react';

import * as S from './DateRowData.styled';

interface IPropsDateRowData {
  localDateValue: string;
}

export const DateRowData: FC<IPropsDateRowData> = ({ localDateValue }) => {
  return <S.DateRowData>{localDateValue}</S.DateRowData>;
};
