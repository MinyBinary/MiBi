import { FC, JSX } from 'react';
import { ConfirmationPopupContent } from 'features/ConfirmationPopupContent';
import { ConnectWallet } from 'features/ConnectWallet';
import { PopupWrapper } from 'features/Popup/logic/PopupWrapper';
import { EPopupVariant } from 'features/Popup/types/popup-variants';

import { usePopup } from './logic/hooks/usePopup';

export const Popup: FC = () => {
  const { variant } = usePopup();

  const renderPopupComponent: Record<EPopupVariant, JSX.Element> = {
    [EPopupVariant.ConnectWallet]: <PopupWrapper renderContent={<ConnectWallet />} />,
    [EPopupVariant.Page]: (
      <PopupWrapper renderTittle="Confirmation" renderContent={<ConfirmationPopupContent />} />
    ),
  };

  return variant && renderPopupComponent[variant] ? renderPopupComponent[variant] : <></>;
};
