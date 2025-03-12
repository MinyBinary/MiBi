import type { FC } from 'react';

import * as S from './Textarea.styled';
import { ValidationErrorText } from 'shared/components/ui/ValidationErrorText/ValidationErrorText.styled';

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  validationErrorString?: string;
}

export const Textarea: FC<ITextAreaProps> = ({ validationErrorString, ...props }) => {
  return (
    <S.AreaWrapper $hasValidationError={!!validationErrorString}>
      <S.Textarea {...props} />
      {validationErrorString && <ValidationErrorText>{validationErrorString}</ValidationErrorText>}
    </S.AreaWrapper>
  );
};
