import { FC, JSX } from 'react';
import { ConnectWallet } from 'features/ConnectWallet';
import { PopupWrapper } from 'features/Popup/logic/PopupWrapper';
import { EPopupVariant } from 'features/Popup/types/popup-variants';

import { usePopup } from './logic/PopupProvider/PopupProvider';

export const Popup: FC = () => {
  const { variant } = usePopup();

  const renderPopupComponent: Record<EPopupVariant, JSX.Element> = {
    [EPopupVariant.ConnectWallet]: <PopupWrapper renderContent={<ConnectWallet />} />,
    [EPopupVariant.Page]: <PopupWrapper renderContent={<div>Page</div>} />,
  };

  return variant && renderPopupComponent[variant] ? renderPopupComponent[variant] : <></>;
};
