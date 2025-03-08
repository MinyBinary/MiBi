import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import CheckedGreenIcon from 'shared/assets/icons/arrows/checked-green.svg?react';
import { EColors } from 'shared/styles/style-variables';

import * as S from './Checkbox.styled';

interface ICheckboxProps
  extends Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
  checked?: boolean;
  colorsProps?: {
    activeColor?: EColors;
    activeHoverColor?: EColors;
    borderColor?: EColors;
  };
}

export const Checkbox: FC<ICheckboxProps> = ({ checked = false, colorsProps, ...props }) => {
  return (
    <S.CheckboxLabel
      $checked={checked}
      $activeHoverColor={colorsProps?.activeHoverColor}
      $activeColor={colorsProps?.activeColor}
      $borderColor={colorsProps?.borderColor}
    >
      <S.CheckboxChecked $checked={checked}>
        <CheckedGreenIcon />
      </S.CheckboxChecked>
      <S.CheckboxInput type="checkbox" checked={checked} {...props} />
    </S.CheckboxLabel>
  );
};
