import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import { EColors } from 'shared/styles/style-variables';

export const enum EButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Bordered = 'bordered',
}

export interface IButtonProps
  extends Partial<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  text?: string;
  icon?: ReactElement;
  advancedIcon?: ReactElement;
  reversed?: boolean;
  variant?: EButtonVariant;
  hoverBackground?: EColors;
}
