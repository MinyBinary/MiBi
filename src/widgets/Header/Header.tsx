import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Account } from 'entities/Account';
import MibiLogo from 'shared/assets/logos/app-logo/mibi.svg?react';
import { AppRoutes } from 'shared/routes/app-routes';
import { Menu } from 'widgets/Menu';

import { HeaderTittle } from './components/ui';

import * as S from './Header.styled';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.TokenTittleBlock>
        <HeaderTittle />
      </S.TokenTittleBlock>
      <S.HeaderContent>
        <S.MibiLogoWrapper>
          <MibiLogo onClick={() => navigate(AppRoutes.Home())} />
        </S.MibiLogoWrapper>
        <Menu />
        <Account />
      </S.HeaderContent>
    </S.Header>
  );
};
