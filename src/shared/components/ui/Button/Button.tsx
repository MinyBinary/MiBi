import type { FC, ReactNode } from 'react';

import { EButtonVariant, IButtonProps } from './types/button-types';

import * as S from './Button.styled';

export const Button: FC<IButtonProps> = ({ text, icon, reversed, ...props }) => {
  const renderButton: Record<EButtonVariant, () => ReactNode> = {
    [EButtonVariant.Primary]: () => (
      <S.Button {...props}>
        {reversed ? (
          <>
            {icon} {text}
          </>
        ) : (
          <>
            {text} {icon}
          </>
        )}
      </S.Button>
    ),
    [EButtonVariant.Secondary]: () => (
      <S.SecondaryButton {...props}>
        {reversed ? (
          <>
            {icon} {text}
          </>
        ) : (
          <>
            {text} {icon}
          </>
        )}
      </S.SecondaryButton>
    ),
    [EButtonVariant.Bordered]: () => (
      <S.BorderedButton {...props}>
        {reversed ? (
          <>
            {icon} {text}
          </>
        ) : (
          <>
            {text} {icon}
          </>
        )}
      </S.BorderedButton>
    ),
  };

  return renderButton[props.variant || EButtonVariant.Primary]();
};
