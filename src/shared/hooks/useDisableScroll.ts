import { useEffect } from 'react';

export const useDisableScroll = (): void => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
};
