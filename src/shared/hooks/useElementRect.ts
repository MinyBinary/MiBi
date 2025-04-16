import { RefObject, useLayoutEffect, useState } from 'react';

interface IUseElementRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const useElementRect = (ref: RefObject<HTMLElement | null>): IUseElementRect => {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    if (ref.current !== null) {
      setRect(ref.current.getBoundingClientRect());
    }

    const handleResize = () => {
      if (ref.current !== null) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    const handleScroll = () => {
      if (ref.current !== null) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, setRect]);

  return {
    top: rect?.top || 0,
    left: rect?.left || 0,
    width: rect?.width || 0,
    height: rect?.height || 0,
  };
};
