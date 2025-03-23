import type { FC } from 'react';

import * as S from './EXPDateRowData.styled';

interface IPropsEXPDateRowData {
  dateValue: string;
  activeDateButton: string;
}

export const EXPDateRowData: FC<IPropsEXPDateRowData> = ({ dateValue, activeDateButton }) => {
  return (
    <S.EXPDateRowData>
      <span>{dateValue}</span>
      <span>{activeDateButton === 'date' ? 'On the date' : 'In the range'}</span>
    </S.EXPDateRowData>
  );
};
