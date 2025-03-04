import type { FC, JSX } from 'react';

import * as S from './PageDashboard.styled';
interface IPropsPageDashboard {
  children?: React.ReactNode;
}

export const PageDashboard: FC<IPropsPageDashboard> = ({ children }): JSX.Element => {
  return <S.PageDashboardWrapper>{children}</S.PageDashboardWrapper>;
};
