import { http, createConfig } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
import { metaMask, walletConnect } from 'wagmi/connectors';

const projectId = '4ae9ddbb6d56805fcc894436aef5a80e';

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [walletConnect({ projectId }), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
