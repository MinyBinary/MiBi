import { FC, ReactNode, useState } from 'react';
import { EPopupVariant } from 'features/Popup/types/popup-variants';

import { PopupContext } from './PopupProviderContext';

export const PopupProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [variant, setVariant] = useState<EPopupVariant | null>(null);

  const openPopup = (variant: EPopupVariant) => {
    setVariant(variant);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setVariant(null);
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, variant, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
