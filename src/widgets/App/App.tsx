import type { FC, JSX } from 'react';
import { Account } from 'entities/Account';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  return (
    <S.AppContainer>
      <Account />
    </S.AppContainer>
  );
};
