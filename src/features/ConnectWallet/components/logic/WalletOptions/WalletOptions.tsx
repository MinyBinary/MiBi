import { FC, useEffect, useState } from 'react';

import { Connector, useConnect } from 'wagmi';

export const WalletOptions: FC = () => {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ));
};

interface IPropsWalletOptions {
  connector: Connector;
  onClick: () => void;
}

const WalletOption: FC<IPropsWalletOptions> = ({ connector, onClick }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <button disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  );
};
