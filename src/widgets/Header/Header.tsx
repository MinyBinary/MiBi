import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Account } from 'entities/Account';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import MibiLogo from 'shared/assets/logos/app-logo/mibi.svg?react';
import { Burger } from 'shared/components/ui';
import { useElementRect } from 'shared/hooks/useElementRect';
import { useInnerWidth } from 'shared/hooks/useInnerWidth';
import { AppRoutes } from 'shared/routes/app-routes';
import { Menu } from 'widgets/Menu';
import { MenuMobile } from 'widgets/MenuMobile';

import * as S from './Header.styled';

export const Header: FC = () => {
  const navigate = useNavigate();

  const { isMobile, isTablet, isDesktop } = useInnerWidth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { top, height } = useElementRect(headerRef);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setOffsetTop(top + height);
    }
  }, [top, height]);

  return (
    <S.Header $isMobile={isMobile} id="header" ref={headerRef}>
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
        {isMobile && (
          <S.MobileContentWrapper>
            <MenuMobile
              offsetTop={Math.max(height, offsetTop)}
              isMenuOpen={isMobileMenuOpen}
              setIsMenuOpen={setIsMobileMenuOpen}
            />
            <Burger
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isClicked={isMobileMenuOpen}
            />
          </S.MobileContentWrapper>
        )}
      </S.HeaderContent>
    </S.Header>
  );
};
