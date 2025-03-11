import type { FC } from 'react';
import { Link, useLocation } from 'react-router';

import { menuItems } from './constants/menu-items';

import * as S from './Menu.styled';

export const Menu: FC = () => {
  const location = useLocation();

  return (
    <S.Menu>
      {menuItems.map((item) => {
        const isCurrentPath = item.path === location.pathname;
        return (
          <Link key={item.title} to={item.path}>
            <S.LinkItem $active={isCurrentPath}>{item.title}</S.LinkItem>
          </Link>
        );
      })}
    </S.Menu>
  );
};
