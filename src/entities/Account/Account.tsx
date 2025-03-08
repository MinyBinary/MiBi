import { FC } from 'react';
import { usePopup } from 'features/Popup';
import { EPopupVariant } from 'features/Popup/types/popup-variants';
import { Button, EButtonVariant } from 'shared/components/ui';
import { StyledText } from 'shared/styled/StyledText';
import { formatWeb3Address } from 'shared/utils';
import { useAccount, useDisconnect } from 'wagmi';

import * as S from './Account.styled';

export const Account: FC = () => {
  const { address } = useAccount();
  const { openPopup } = usePopup();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    openPopup(EPopupVariant.ConnectWallet);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <S.AccountContainer>
      {address && <StyledText>{formatWeb3Address(address)}</StyledText>}
      <Button
        onClick={!address ? handleConnect : handleDisconnect}
        text={!address ? 'Connect Wallet' : 'Disconnect'}
        variant={EButtonVariant.Primary}
      />
    </S.AccountContainer>
  );
};
