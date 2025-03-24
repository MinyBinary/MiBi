export interface OverlayContextType {
  showOverlay: <T extends HTMLElement | null>(
    elementId: string,
    elementRef: React.RefObject<T>,
  ) => void;
  hideOverlay: () => void;
  overlayVisible: boolean;
  activeElementId: string | null;
  overlayPosition: { top: number; left: number; width: number; height: number };
}
