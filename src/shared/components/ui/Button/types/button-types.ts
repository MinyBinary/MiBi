import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

export const enum EButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Bordered = 'bordered',
}

export interface IButtonProps
  extends Partial<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  text?: string;
  icon?: ReactElement;
  reversed?: boolean;
  variant?: EButtonVariant;
}
