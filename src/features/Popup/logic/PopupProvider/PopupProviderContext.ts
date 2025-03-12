import { createContext } from 'react';
import { PopupContextType } from 'features/Popup/types/context-type';

export const PopupContext = createContext<PopupContextType | undefined>(undefined);
