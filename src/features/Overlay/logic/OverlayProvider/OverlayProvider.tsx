import { FC, useEffect, useState } from 'react';

// import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import { OverlayContext } from './OverlayProviderContext';

import { Overlay } from 'features/Overlay/Overlay.styled';

interface IPropsAppProviders {
  children?: React.ReactNode;
}

export const OverlayProvider: FC<IPropsAppProviders> = ({ children }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [overlayPosition, setOverlayPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (overlayVisible) {
      document.body.style.overflowY = 'scroll';
      document.body.style.pointerEvents = 'none';
      const preventDefault = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'Tab') {
          setOverlayVisible(false);
        }
        e.preventDefault();
      };

      window.addEventListener('keydown', preventDefault, true);

      return () => {
        document.body.style.overflowY = 'auto';
        document.body.style.pointerEvents = 'auto';
        window.removeEventListener('keydown', preventDefault, true);
      };
    }
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.pointerEvents = 'auto';
    };
  }, [overlayVisible, overlayPosition]);

  const showOverlay = <T extends HTMLElement | null>(
    elementId: string,
    elementRef: React.RefObject<T>,
  ) => {
    if (activeElementId !== elementId) {
      setActiveElementId(elementId);
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setOverlayPosition({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
      setOverlayVisible(true);
    }
  };

  const hideOverlay = () => {
    setActiveElementId(null);
    setOverlayVisible(false);
  };

  return (
    <OverlayContext.Provider
      value={{ showOverlay, hideOverlay, overlayVisible, activeElementId, overlayPosition }}
    >
      <Overlay
        $visible={overlayVisible}
        top={overlayPosition.top}
        left={overlayPosition.left}
        width={overlayPosition.width}
        height={overlayPosition.height}
        $activeElementId={activeElementId}
      />
      {children}
    </OverlayContext.Provider>
  );
};
