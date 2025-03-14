import type { FC, ReactNode } from 'react';

import { EButtonVariant, IButtonProps } from './types/button-types';

import * as S from './Button.styled';

export const Button: FC<IButtonProps> = ({ text, icon, advancedIcon, reversed, ...props }) => {
  const buttonContent = (
    <>
      {reversed ? (
        <>
          {advancedIcon && <S.AdvancedIcon>{advancedIcon}</S.AdvancedIcon>}
          {icon} {text}
        </>
      ) : (
        <>
          {advancedIcon && <S.AdvancedIcon>{advancedIcon}</S.AdvancedIcon>}
          {text} {icon}
        </>
      )}
    </>
  );

  const renderButton: Record<EButtonVariant, () => ReactNode> = {
    [EButtonVariant.Primary]: () => <S.Button {...props}>{buttonContent}</S.Button>,
    [EButtonVariant.Secondary]: () => (
      <S.SecondaryButton {...props}>{buttonContent}</S.SecondaryButton>
    ),
    [EButtonVariant.Bordered]: () => (
      <S.BorderedButton {...props}>{buttonContent}</S.BorderedButton>
    ),
  };

  return renderButton[props.$variant || EButtonVariant.Primary]();
};
