import { type FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { useScroll } from 'shared/hooks/useScroll';
import { AppRoutes } from 'shared/routes/app-routes';
import { Durations } from 'shared/styles/style-variables';

import { menuItems } from './constants/menu-items';

import * as S from './MenuMobile.styled';

interface IPropsMenuMobileProps {
  isMenuOpen: boolean;
  offsetTop: number;
  setIsMenuOpen: (value: boolean) => void;
}

export const MenuMobile: FC<IPropsMenuMobileProps> = ({ isMenuOpen, offsetTop, setIsMenuOpen }) => {
  const location = useLocation();
  const { handleDisableScroll, handleEnableScroll } = useScroll();

  const menuRef = useClickOutside<HTMLDivElement>(() => {
    handleEnableScroll();
  });

  const animateProps = {
    initial: { width: '0%' },
    animate: { width: isMenuOpen ? '100%' : '0%' },
    exit: { width: '0%' },
    transition: {
      width: {
        duration: parseFloat(Durations.Fast),
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    if (isMenuOpen) {
      handleDisableScroll();
    } else {
      handleEnableScroll();
    }
  }, [isMenuOpen, handleDisableScroll, handleEnableScroll]);

  return (
    <>
      <S.MenuMobileOverlay>
        <AnimatePresence>
          <S.MenuMobileWrapper {...animateProps} ref={menuRef} $offsetTop={offsetTop}>
            <S.MobileMenuContent>
              <S.ContentTop>
                <ThemeSwitcher />
              </S.ContentTop>
              <S.LinksWrapper>
                {menuItems.map((item) => {
                  const isCurrentPath = item.path === location.pathname;
                  const isWp = item.path === AppRoutes.WP();

                  return (
                    <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                      <S.LinkItem $active={isCurrentPath} $wordSpace={isWp ? -3 : undefined}>
                        {item.title}
                      </S.LinkItem>
                    </Link>
                  );
                })}
              </S.LinksWrapper>
            </S.MobileMenuContent>
          </S.MenuMobileWrapper>
        </AnimatePresence>
      </S.MenuMobileOverlay>
    </>
  );
};
