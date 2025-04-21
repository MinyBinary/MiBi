import type { FC } from 'react';
import dayjs from 'dayjs';

import * as S from './EXPDateRowData.styled';

interface IPropsEXPDateRowData {
  dateValue: string;
  activeDateButton: string;
}

export const EXPDateRowData: FC<IPropsEXPDateRowData> = ({ dateValue, activeDateButton }) => {
  const [day, month, year] = dateValue.split(' ')[0].split('.');
  const formattedDate = dayjs(`${year}-${month}-${day}`).format('DD MMM YY');

  const isOnTheDate = activeDateButton === 'date';

  return (
    <S.EXPDateRowData>
      <S.RowDate>{formattedDate}</S.RowDate>
      <S.RowDateText>{isOnTheDate ? 'On the date' : 'In the range'}</S.RowDateText>
    </S.EXPDateRowData>
  );
};
