import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from 'widgets/Header';

import * as S from './AppLayout.styled';

export const AppLayout: FC = () => {
  return (
    <S.AppLayout>
      <Header />
      <Outlet />
    </S.AppLayout>
  );
};
