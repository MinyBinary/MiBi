import { FC, useEffect, useState } from 'react';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';

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
      const isMobile = window.innerWidth <= parseInt(BreakPointsV2.MobileLarge);

      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      const preventDefault = (e: KeyboardEvent) => {
        e.preventDefault();
      };

      window.addEventListener('keydown', preventDefault, true);

      if (isMobile) {
        document.body.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }

      return () => {
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
        window.removeEventListener('keydown', preventDefault, true);
      };
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    };
  }, [overlayVisible]);

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

        elementRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
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
      {children}
      <Overlay
        $visible={overlayVisible}
        top={overlayPosition.top}
        left={overlayPosition.left}
        width={overlayPosition.width}
        height={overlayPosition.height}
        $activeElementId={activeElementId}
      />
    </OverlayContext.Provider>
  );
};
