import { useContext } from 'react';
import { PopupContext } from 'features/Popup/logic/PopupProvider/PopupProviderContext';
import { PopupContextType } from 'features/Popup/types/context-type';

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
