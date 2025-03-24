import { createContext } from 'react';
import { OverlayContextType } from 'features/Overlay/types/context-type';

export const OverlayContext = createContext<OverlayContextType>({
  showOverlay: () => {
    /* empty */
  },
  hideOverlay: () => {
    /* empty */
  },
  overlayVisible: false,
  activeElementId: null,
  overlayPosition: { top: 0, left: 0, width: 0, height: 0 },
});
