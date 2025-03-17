import type { FC } from 'react';

import * as S from './BlockDescription.styled';

interface IPropsBlockDescription {
  text?: string;
}

export const BlockDescription: FC<IPropsBlockDescription> = ({ text }) => {
  return <S.BlockDescription>{text}</S.BlockDescription>;
};
