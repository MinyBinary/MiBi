import { FC } from 'react';
import { WalletOptions } from 'features/ConnectWallet/components/logic/WalletOptions';
import { usePopup } from 'features/Popup';
import { useAccount } from 'wagmi';

export const ConnectWallet: FC = () => {
  const { isConnected } = useAccount();
  const { closePopup } = usePopup();

  if (isConnected) {
    closePopup();
  }

  return <WalletOptions />;
};
