import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Account } from 'entities/Account';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import MibiLogo from 'shared/assets/logos/app-logo/mibi.svg?react';
import { useInnerWidth } from 'shared/hooks/useInnerWidth';
import { AppRoutes } from 'shared/routes/app-routes';
import { Menu } from 'widgets/Menu';
import { MenuMobile } from 'widgets/MenuMobile';

import * as S from './Header.styled';

export const Header: FC = () => {
  const navigate = useNavigate();

  const { isMobile, isTablet, isDesktop } = useInnerWidth();

  return (
    <S.Header $isMobile={isMobile}>
      <S.HeaderContent>
        <S.MibiLogoWrapper>
          <MibiLogo onClick={() => navigate(AppRoutes.Home())} />
        </S.MibiLogoWrapper>
        {(isDesktop || isTablet) && (
          <>
            <Menu />
            <ThemeSwitcher />
            <Account />
          </>
        )}
        {isMobile && <MenuMobile />}
      </S.HeaderContent>
    </S.Header>
  );
};
