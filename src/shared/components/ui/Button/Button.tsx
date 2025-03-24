import type { FC, ReactNode } from 'react';

import { EButtonVariant, IButtonProps } from './types/button-types';

import * as S from './Button.styled';

export const Button: FC<IButtonProps> = ({
  text,
  icon,
  icon2,
  itemsGap,
  advancedIcon,
  reversed,
  active,
  ...props
}) => {
  const buttonContent = (
    <>
      {reversed ? (
        <>
          {advancedIcon && <S.AdvancedIcon>{advancedIcon}</S.AdvancedIcon>}
          {icon} {text} {icon2}
        </>
      ) : (
        <>
          {advancedIcon && <S.AdvancedIcon>{advancedIcon}</S.AdvancedIcon>}
          {icon2} {text} {icon}
        </>
      )}
    </>
  );

  const renderButton: Record<EButtonVariant, () => ReactNode> = {
    [EButtonVariant.Primary]: () => (
      <S.Button {...props} $itemsGap={itemsGap}>
        {buttonContent}
      </S.Button>
    ),
    [EButtonVariant.Secondary]: () => (
      <S.SecondaryButton {...props} $itemsGap={itemsGap}>
        {buttonContent}
      </S.SecondaryButton>
    ),
    [EButtonVariant.Bordered]: () => (
      <S.BorderedButton {...props} $itemsGap={itemsGap}>
        {buttonContent}
      </S.BorderedButton>
    ),
    [EButtonVariant.Green]: () => (
      <S.Green {...props} $itemsGap={itemsGap} $active={active}>
        {buttonContent}
      </S.Green>
    ),
    [EButtonVariant.Red]: () => (
      <S.Red {...props} $itemsGap={itemsGap} $active={active}>
        {buttonContent}
      </S.Red>
    ),
  };

  return renderButton[props.variant || EButtonVariant.Primary]();
};
