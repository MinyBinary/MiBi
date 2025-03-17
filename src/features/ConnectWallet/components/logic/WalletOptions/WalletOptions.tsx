import { FC } from 'react';
import { WalletOption } from 'features/ConnectWallet/components/logic/WalletOption';
import { useConnect } from 'wagmi';

import * as S from './WalletOptions.styled';

export const WalletOptions: FC = () => {
  const { connectors, connect } = useConnect();

  return (
    <S.WalletOptionsWrapper>
      <S.TittleWrapper>
        <S.WalletOptionsTitle>Connect wallet</S.WalletOptionsTitle>
        <S.WalletInfoTitle>Please connect your wallet to continue.</S.WalletInfoTitle>
        <S.WalletInfoTitle>The system supports the following wallets</S.WalletInfoTitle>
      </S.TittleWrapper>

      {connectors.map((connector) => (
        <WalletOption
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector })}
        />
      ))}
    </S.WalletOptionsWrapper>
  );
};
