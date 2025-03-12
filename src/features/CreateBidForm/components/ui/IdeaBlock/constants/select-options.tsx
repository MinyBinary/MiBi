import BinanceIcon from 'shared/assets/icons/exchanges/binance.svg?react';
import BybitIcon from 'shared/assets/icons/exchanges/bybit.svg?react';
import CoinbaseIcon from 'shared/assets/icons/exchanges/coinbase.svg?react';

export const ideaCoinsOptions = [
  {
    value: 'ETH/BTC',
    label: 'ETH/BTC',
  },
  {
    value: 'BTC/ETH',
    label: 'BTC/ETH',
  },
  {
    value: 'BTC/USDT',
    label: 'BTC/USDT',
  },
  {
    value: 'USDT/BTC',
    label: 'USDT/BTC',
  },
];

export const ideaExchangesOptions = [
  {
    icon: <BinanceIcon />,
    value: 'Binance',
    label: 'Binance',
  },
  {
    icon: <CoinbaseIcon />,
    value: 'Coinbase',
    label: 'Coinbase',
  },
  {
    icon: <BybitIcon />,
    value: 'Bybit',
    label: 'Bybit',
  },
];
