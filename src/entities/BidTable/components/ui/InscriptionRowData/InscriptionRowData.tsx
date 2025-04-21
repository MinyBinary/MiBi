import type { FC } from 'react';

import * as S from './InscriptionRowData.styled';

interface IPropsInscriptionRowData {
  name?: string;
  comment?: string;
}

export const InscriptionRowData: FC<IPropsInscriptionRowData> = ({ name, comment }) => {
  return (
    <S.InscriptionRowData>
      {name && <S.UserName>{name}</S.UserName>}
      {comment && <S.UserComment>{comment}</S.UserComment>}
    </S.InscriptionRowData>
  );
};
