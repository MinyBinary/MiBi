import { FC, JSX } from 'react';
import { ConnectWallet } from 'features/ConnectWallet';
import { PopupWrapper } from 'features/Popup/logic/PopupWrapper';
import { EPopupVariant } from 'features/Popup/types/popup-variants';
import { Button, EButtonVariant } from 'shared/components/ui';

import { usePopup } from './logic/hooks/usePopup';

export const Popup: FC = () => {
  const { variant } = usePopup();

  const renderPopupComponent: Record<EPopupVariant, JSX.Element> = {
    [EPopupVariant.ConnectWallet]: <PopupWrapper renderContent={<ConnectWallet />} />,
    [EPopupVariant.Page]: (
      <PopupWrapper
        renderContent={
          <Button variant={EButtonVariant.Bordered} form="bid-form" type="submit" text="Submit" />
        }
      />
    ),
  };

  return variant && renderPopupComponent[variant] ? renderPopupComponent[variant] : <></>;
};
