import { type FC, type JSX, useState } from 'react';
import { Account } from 'entities/Account';
import CheckedGreenIcon from 'shared/assets/icons/arrows/checked-green.svg?react';
import TriangleDownIcon from 'shared/assets/icons/arrows/triangle-filled-down.svg?react';
import TriangleUpIcon from 'shared/assets/icons/arrows/triangle-filled-up.svg?react';
import BinanceIcon from 'shared/assets/icons/exchanges/binance.svg?react';
import BybitIcon from 'shared/assets/icons/exchanges/bybit.svg?react';
import CoinbaseIcon from 'shared/assets/icons/exchanges/coinbase.svg?react';
import UserICon from 'shared/assets/icons/users/user.svg?react';
import {
  Button,
  Checkbox,
  EButtonVariant,
  Input,
  ISelectOption,
  Select,
} from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  const [isChecked, setChecked] = useState(false);
  const [currentValue1, setCurrentValue1] = useState<ISelectOption>();
  const [currentValue2, setCurrentValue2] = useState<ISelectOption>();
  const [currentValue3, setCurrentValue3] = useState<ISelectOption>();

  const [validationError, setValidationError] = useState<string>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value !== '') {
      setValidationError('');
    } else {
      setValidationError('Field is required');
    }
  };

  const handleSelect = (option: ISelectOption) => {
    setCurrentValue3(option);
    setValidationError('');
  };

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
        style={{ color: EColors.Green1 }}
        text={'User'}
        variant={EButtonVariant.Primary}
        icon={<UserICon fill={EColors.Green1} width={14} />}
      />

      <S.SelectWrapper1>
        <Select
          current={currentValue1}
          handleSelect={setCurrentValue1}
          placeholder="Coin"
          options={[
            { value: 'USDT', label: 'USDT' },
            { value: 'BNB', label: 'BNB' },
          ]}
        />
      </S.SelectWrapper1>
      <S.SelectWrapper2>
        <Select
          current={currentValue2}
          handleSelect={setCurrentValue2}
          placeholder="Platform"
          options={[
            {
              icon: <BinanceIcon />,
              value: 'Binance',
              label: 'Binance',
            },
            {
              icon: <BybitIcon />,
              value: 'Bybit',
              label: 'Bybit',
            },
            {
              icon: <CoinbaseIcon />,
              value: 'Coinbase',
              label: 'Coinbase',
            },
          ]}
        />
      </S.SelectWrapper2>
      <Input
        width={180}
        validationErrorString={validationError}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Amount"
      >
        <Select
          width={60}
          placeholder="Coin"
          current={currentValue3}
          handleSelect={handleSelect}
          borderRadius="0 4px 4px 0"
          options={[
            { value: 'USDT', label: 'USDT' },
            { value: 'BNB', label: 'BNB' },
          ]}
        />
      </Input>
    </S.AppContainer>
  );
};
