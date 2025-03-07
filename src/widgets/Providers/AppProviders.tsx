import type { FC, JSX } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PopupProvider } from 'features/Popup';
import { config } from 'shared/configs/wagmi/wagmi.config';
import { WagmiProvider } from 'wagmi';

interface IPropsAppProviders {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();
export const AppProviders: FC<IPropsAppProviders> = ({ children }): JSX.Element => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>{children}</PopupProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
