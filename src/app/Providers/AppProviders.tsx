import type { FC, JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BidFormProvider } from 'entities/CreateBidForm/BidFormProvider/BidFormContextProvider';
import { OverlayProvider } from 'features/Overlay/logic/OverlayProvider/OverlayProvider';
import { Popup, PopupProvider } from 'features/Popup';
import { ThemeProviderComponent } from 'features/ThemeSwitcher';
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
        <ThemeProviderComponent>
          <OverlayProvider>
            <PopupProvider>
              <BidFormProvider>
                <Popup />
                {children}
              </BidFormProvider>
            </PopupProvider>
          </OverlayProvider>
        </ThemeProviderComponent>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
