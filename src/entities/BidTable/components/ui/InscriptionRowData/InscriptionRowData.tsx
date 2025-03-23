import type { FC } from 'react';

import * as S from './InscriptionRowData.styled';

interface IPropsInscriptionRowData {
  name: string;
  comment: string;
}

export const InscriptionRowData: FC<IPropsInscriptionRowData> = ({ name, comment }) => {
  return (
    <S.InscriptionRowData>
      <S.UserName>{name}</S.UserName>
      <S.UserComment>{comment}</S.UserComment>
    </S.InscriptionRowData>
  );
};
