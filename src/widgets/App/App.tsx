import type { FC, JSX } from 'react';
import { usePopup } from 'features/Popup';
import { EPopupVariant } from 'features/Popup/types/popup-variants';

import * as S from './App.styled';

export const App: FC = (): JSX.Element => {
  const { openPopup } = usePopup();
  return (
    <S.AppContainer>
      <button onClick={() => openPopup(EPopupVariant.ConnectWallet)}>Connect wallet</button>
    </S.AppContainer>
  );
};
