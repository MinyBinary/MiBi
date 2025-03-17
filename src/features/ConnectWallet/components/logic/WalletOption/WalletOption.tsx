import { type FC, ReactElement, useEffect, useState } from 'react';
import MetamaskIcon from 'shared/assets/icons/wallets/metamask.svg?react';
import WalletConnectIcon from 'shared/assets/icons/wallets/wallet-connect.svg?react';
import { EButtonVariant } from 'shared/components/ui';
import { Connector } from 'wagmi';

import * as S from './WalletOption.styled';

interface IPropsWalletOptions {
  connector: Connector;
  onClick: () => void;
}

export const WalletOption: FC<IPropsWalletOptions> = ({ connector, onClick }) => {
  const [ready, setReady] = useState(false);

  const renderIcon: Record<Connector['name'], () => ReactElement> = {
    ['WalletConnect']: () => <WalletConnectIcon />,
    ['MetaMask']: () => <MetamaskIcon />,
  };

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <S.WalletOptionWrapper>
      <S.WalletButton
        disabled={!ready}
        onClick={() => {
          onClick();
        }}
        icon2={renderIcon[connector.name]()}
        itemsGap={16}
        variant={EButtonVariant.Secondary}
        text={connector.name}
      />
    </S.WalletOptionWrapper>
  );
};
