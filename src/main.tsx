import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { ResetStyles } from 'shared/styles/ResetStyles';
import { App } from 'widgets/App';
import { AppProviders } from 'widgets/Providers/AppProviders';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
