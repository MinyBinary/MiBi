import { useContext } from 'react';
import { OverlayContext } from 'features/Overlay/logic/OverlayProvider/OverlayProviderContext';
import { OverlayContextType } from 'features/Overlay/types/context-type';

export const useOverlay = (): OverlayContextType => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};
