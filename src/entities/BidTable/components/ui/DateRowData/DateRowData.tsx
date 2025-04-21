import type { FC } from 'react';
import dayjs from 'dayjs';

import * as S from './DateRowData.styled';

interface IPropsDateRowData {
  localDateValue: string;
}

export const DateRowData: FC<IPropsDateRowData> = ({ localDateValue }) => {
  const [day, month, year] = localDateValue.split(' ')[0].split('.');
  const formattedDate = dayjs(`${year}-${month}-${day}`).format('DD MMM YY');

  return (
    <S.DateRowData>
      <S.RowDate>{formattedDate}</S.RowDate>
    </S.DateRowData>
  );
};
