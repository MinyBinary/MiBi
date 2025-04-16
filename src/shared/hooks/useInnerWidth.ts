import { useEffect, useState } from 'react';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';

export const useInnerWidth = (): {
  innerWidth: number;
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
} => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    innerWidth,
    isMobile: innerWidth <= parseInt(BreakPointsV2.MobileLarge),
    isTablet:
      innerWidth <= parseInt(BreakPointsV2.Laptop13to15) &&
      innerWidth > parseInt(BreakPointsV2.MobileLarge),
    isDesktop: innerWidth > parseInt(BreakPointsV2.TabletLandscape),
  };
};
