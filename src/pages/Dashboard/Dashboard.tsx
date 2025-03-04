import type { FC, JSX } from 'react';

import * as S from './Dashboard.styled';

interface IPropsDashboard {
  children?: React.ReactNode;
}

export const Dashboard: FC<IPropsDashboard> = ({ children }): JSX.Element => {
  return <S.DashboardWrapper>{children}</S.DashboardWrapper>;
};
