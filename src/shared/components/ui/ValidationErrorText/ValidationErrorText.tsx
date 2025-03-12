import type { FC } from 'react';

import * as S from './ValidationErrorText.styled';

interface IPropsValidationErrorText {
  children?: React.ReactNode;
}

export const ValidationErrorText: FC<IPropsValidationErrorText> = ({ children }) => {
  return <S.ValidationErrorText>{children}</S.ValidationErrorText>;
};
