import type { FC, JSX } from 'react';

import { ConnectWallet } from 'components/logic/ConnectWallet';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  return (
    <S.AppContainer>
      <ConnectWallet />
    </S.AppContainer>
  );
};
