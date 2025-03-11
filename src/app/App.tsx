import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Intro } from 'pages/Intro';
import { AppRoutes } from 'shared/routes/app-routes';
import { AppLayout } from 'widgets/AppLayout';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home()} element={<AppLayout />}>
          <Route index element={<Intro />} />
          <Route path={AppRoutes.About()} element={<>About</>} />
          <Route path={AppRoutes.Support()} element={<>Support</>} />
          <Route path={AppRoutes.WP()} element={<>WP MiBi</>} />
          <Route path={AppRoutes.FAQ()} element={<>FAQ</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
