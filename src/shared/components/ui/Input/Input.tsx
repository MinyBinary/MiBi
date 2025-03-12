import type { FC } from 'react';

import * as S from './Input.styled';
import { ValidationErrorText } from 'shared/components/ui/ValidationErrorText/ValidationErrorText.styled';

interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  validationErrorString?: string;
}

export const Input: FC<IPropsInput> = ({ children, validationErrorString, ...props }) => {
  return (
    <S.InputWrapper $width={props.width} $hasValidationError={!!validationErrorString}>
      <S.Input {...props} />
      {children}
      {validationErrorString && <ValidationErrorText>{validationErrorString}</ValidationErrorText>}
    </S.InputWrapper>
  );
};
