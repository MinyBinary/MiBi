import { type FC, type JSX, useState } from 'react';
import { Account } from 'entities/Account';
import CheckedGreenIcon from 'shared/assets/icons/arrows/checked-green.svg?react';
import TriangleDownIcon from 'shared/assets/icons/arrows/triangle-filled-down.svg?react';
import TriangleUpIcon from 'shared/assets/icons/arrows/triangle-filled-up.svg?react';
import UserICon from 'shared/assets/icons/users/user.svg?react';
import { Button, Checkbox, EButtonVariant } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  const [isChecked, setChecked] = useState(false);

  return (
    <S.AppContainer>
      <Account />
      <Checkbox
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        colorsProps={{
          activeColor: EColors.Green1,
          activeHoverColor: EColors.Green4,
        }}
      />
      <S.AboveBtn
        text={'Above'}
        variant={EButtonVariant.Bordered}
        icon={<TriangleUpIcon width={8} />}
        advancedIcon={<CheckedGreenIcon />}
      />
      <S.BelowBtn
        text={'Below'}
        variant={EButtonVariant.Bordered}
        icon={<TriangleDownIcon width={8} />}
        advancedIcon={<CheckedGreenIcon stroke={EColors.Red1} />}
      />
      <Button
        style={{ width: '150px', color: EColors.Green1 }}
        text={'User'}
        variant={EButtonVariant.Primary}
        icon={<UserICon fill={EColors.Green1} width={14} />}
      />
      <Button
        style={{ width: '150px', color: EColors.Green1 }}
        text={'User'}
        variant={EButtonVariant.Primary}
        icon={<UserICon fill={EColors.Green1} width={14} />}
        reversed
      />
    </S.AppContainer>
  );
};
