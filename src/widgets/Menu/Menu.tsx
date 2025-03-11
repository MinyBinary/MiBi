import type { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { AppRoutes } from 'shared/routes/app-routes';

import { menuItems } from './constants/menu-items';

import * as S from './Menu.styled';

export const Menu: FC = () => {
  const location = useLocation();

  return (
    <S.Menu>
      {menuItems.map((item) => {
        const isCurrentPath = item.path === location.pathname;
        const isWp = item.path === AppRoutes.WP();
        return (
          <Link key={item.title} to={item.path}>
            <S.LinkItem $active={isCurrentPath} $wordSpace={isWp ? -3 : undefined}>
              {item.title}
            </S.LinkItem>
          </Link>
        );
      })}
    </S.Menu>
  );
};
