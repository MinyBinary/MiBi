import type { FC, ReactNode } from 'react';

import * as S from './SelectV2.styled';

type TExpandPosition = 'right' | 'left';

interface IPropsSelectV2 extends React.HTMLAttributes<HTMLDivElement> {
  expandedPosition?: TExpandPosition;
  containerContent?: ReactNode;
  selectOptions?: { label: string; element: ReactNode }[];
  isExpanded?: boolean;
  cb?: <T>(value: T) => void;
}

export const SelectV2: FC<IPropsSelectV2> = ({
  containerContent,
  selectOptions,
  isExpanded,
  expandedPosition = 'right',
  cb,
  ...props
}) => {
  return (
    <S.SelectContainer {...props}>
      <S.SelectContainerContent>{containerContent}</S.SelectContainerContent>
      {isExpanded && (
        <S.SelectOptions $right={expandedPosition === 'right'}>
          {selectOptions?.map((option, index) => (
            <S.SelectOption key={index} onClick={() => cb?.(option.label)}>
              {option.element}
            </S.SelectOption>
          ))}
        </S.SelectOptions>
      )}
    </S.SelectContainer>
  );
};
