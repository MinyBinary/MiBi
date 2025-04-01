import { type FC, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { Button } from 'shared/components/ui';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { useDisableScroll } from 'shared/hooks/useDisableScroll';
import { AppRoutes } from 'shared/routes/app-routes';
import { Durations } from 'shared/styles/style-variables';

import { menuItems } from './constants/menu-items';

import * as S from './MenuMobile.styled';

export const MenuMobile: FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useDisableScroll();

  const menuRef = useClickOutside<HTMLDivElement>(() => setIsMenuOpen(false));

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

  return (
    <>
      <S.MenuMobileOverlay $isOpen={isMenuOpen}>
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
