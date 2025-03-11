import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app';
import { AppProviders } from 'app/Providers/AppProviders';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { ResetStyles } from 'shared/styles/ResetStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
