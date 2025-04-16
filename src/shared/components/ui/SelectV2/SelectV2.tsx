import { type FC, type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { Durations } from 'shared/styles/style-variables';

import * as S from './SelectV2.styled';

type TExpandPosition = 'right' | 'left';

interface IPropsSelectV2 extends React.HTMLAttributes<HTMLDivElement> {
  expandedPosition?: TExpandPosition;
  containerContent?: ReactNode;
  selectOptions?: { label: string; element: ReactNode }[];
  isExpanded?: boolean;
  toggleExpand: () => void;
  cb?: <T>(value: T) => void;
}

export const SelectV2: FC<IPropsSelectV2> = ({
  containerContent,
  selectOptions,
  isExpanded,
  expandedPosition = 'right',
  toggleExpand,
  cb,
  ...props
}) => {
  const animateProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -2 },
    transition: {
      opacity: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
    },
  };

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => isExpanded && toggleExpand());

  return (
    <S.SelectContainer {...props} ref={clickOutsideRef}>
      <S.SelectContainerContent>{containerContent}</S.SelectContainerContent>
      <AnimatePresence>
        {isExpanded && (
          <S.SelectOptions $right={expandedPosition === 'right'} {...animateProps}>
            {selectOptions?.map((option, index) => (
              <S.SelectOption key={index} onClick={() => cb?.(option.label)}>
                {option.element}
              </S.SelectOption>
            ))}
          </S.SelectOptions>
        )}
      </AnimatePresence>
    </S.SelectContainer>
  );
};
