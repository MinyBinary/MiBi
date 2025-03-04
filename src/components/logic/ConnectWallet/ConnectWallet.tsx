import { FC } from 'react';

import { Account } from 'components/logic/Account';
import { WalletOptions } from 'components/logic/WalletOptions/WalletOptions';
import { useAccount } from 'wagmi';

export const ConnectWallet: FC = () => {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
};
