import type { FC } from 'react';

import * as S from './Textarea.styled';

type ITextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<ITextareaProps> = ({ ...props }) => {
  return <S.Textarea maxLength={128} {...props}></S.Textarea>;
};
