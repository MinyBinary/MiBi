import { createContext, FC, ReactNode, useContext, useState } from 'react';

import { EPopupVariant } from 'features/Popup/types/popup-variants';

interface PopupContextType {
  isPopupOpen: boolean;
  variant: EPopupVariant | null;
  openPopup: (variant: EPopupVariant) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

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
