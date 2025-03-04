import type { FC, JSX } from 'react';

import { ConnectWallet } from 'features/ConnectWallet';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  return (
    <S.AppContainer>
      <ConnectWallet />
    </S.AppContainer>
  );
};
