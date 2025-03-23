import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app';
import { AppProviders } from 'app/Providers/AppProviders';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { ResetStyles } from 'shared/styles/ResetStyles';

dayjs.extend(utc);
dayjs.extend(timezone);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <ResetStyles />
      <GlobalStyles />
      <App />
    </AppProviders>
  </StrictMode>,
);
