import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from 'configs/wagmi/wagmi.config';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { ResetStyles } from 'shared/styles/ResetStyles';
import { WagmiProvider } from 'wagmi';
import { App } from 'widgets/App';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
);
