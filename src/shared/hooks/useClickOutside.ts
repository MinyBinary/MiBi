import { useEffect, useRef } from 'react';

// Тип для рефа и хука
export const useClickOutside = <T extends HTMLElement>(
  callback: () => void,
  ignoreRefs: React.RefObject<HTMLElement | null>[] = [],
): { current: T | null } => {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickOutside =
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !ignoreRefs.some((ignoreRef) => ignoreRef.current?.contains(event.target as Node));

      if (isClickOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ignoreRefs]);

  return ref;
};
