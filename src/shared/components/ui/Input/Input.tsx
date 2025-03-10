import type { FC } from 'react';

import * as S from './Input.styled';

interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  validationErrorString?: string;
}

export const Input: FC<IPropsInput> = ({ children, validationErrorString, ...props }) => {
  return (
    <S.InputWrapper $width={props.width} $hasValidationError={!!validationErrorString}>
      <S.Input {...props} />
      {children}
      {validationErrorString && (
        <S.ValidationErrorText>{validationErrorString}</S.ValidationErrorText>
      )}
    </S.InputWrapper>
  );
};
