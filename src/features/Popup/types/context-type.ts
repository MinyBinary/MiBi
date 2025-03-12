import { EPopupVariant } from './popup-variants';

export interface PopupContextType {
  isPopupOpen: boolean;
  variant: EPopupVariant | null;
  openPopup: (variant: EPopupVariant) => void;
  closePopup: () => void;
}
