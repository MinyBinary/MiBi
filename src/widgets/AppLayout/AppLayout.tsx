import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from 'widgets/Header';
import { HeaderTittle } from 'widgets/Header/components/ui';

import * as S from './AppLayout.styled';

export const AppLayout: FC = () => {
  return (
    <S.AppLayout>
      <S.TokenTittleBlock>
        <HeaderTittle />
      </S.TokenTittleBlock>
      <Header />
      <Outlet />
    </S.AppLayout>
  );
};
