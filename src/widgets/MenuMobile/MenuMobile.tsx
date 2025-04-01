import { type FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { Button } from 'shared/components/ui';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { useScroll } from 'shared/hooks/useScroll';
import { AppRoutes } from 'shared/routes/app-routes';
import { Durations } from 'shared/styles/style-variables';

import { menuItems } from './constants/menu-items';

import * as S from './MenuMobile.styled';

export const MenuMobile: FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleDisableScroll, handleEnableScroll } = useScroll();

  const menuRef = useClickOutside<HTMLDivElement>(() => {
    handleEnableScroll();
    setIsMenuOpen(false);
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
          <S.MenuMobileWrapper {...animateProps} ref={menuRef}>
            <Button onClick={() => setIsMenuOpen(false)} style={{ background: 'gray' }} />
            <S.LinksWrapper>
              {menuItems.map((item) => {
                const isCurrentPath = item.path === location.pathname;
                const isWp = item.path === AppRoutes.WP();

                return (
                  <Link key={item.title} to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <S.LinkItem $active={isCurrentPath} $wordSpace={isWp ? -3 : undefined}>
                      {item.title}
                    </S.LinkItem>
                  </Link>
                );
              })}
            </S.LinksWrapper>
          </S.MenuMobileWrapper>
        </AnimatePresence>
      </S.MenuMobileOverlay>
      <Button onClick={() => setIsMenuOpen(true)} />
    </>
  );
};
