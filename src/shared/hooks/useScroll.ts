import { useEffect } from 'react';

export const useScroll = (): {
  handleDisableScroll: () => void;
  handleEnableScroll: () => void;
} => {
  const handleDisableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleEnableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return { handleDisableScroll, handleEnableScroll };
};
