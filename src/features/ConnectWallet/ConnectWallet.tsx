import { FC } from 'react';
import { Account } from 'entities/Account';
import { WalletOptions } from 'features/ConnectWallet/components/logic/WalletOptions';
import { useAccount } from 'wagmi';

export const ConnectWallet: FC = () => {
  const { isConnected } = useAccount();
  return isConnected ? <Account /> : <WalletOptions />;
};
