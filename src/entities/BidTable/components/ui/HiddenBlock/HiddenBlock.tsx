import { type FC, useState } from 'react';

import * as S from './HiddenBlock.styled';

interface IPropsHiddenBlock {
  children?: React.ReactNode;
}

export const HiddenBlock: FC<IPropsHiddenBlock> = ({ children }) => {
  const [isHiddenContentOpen, setIsHiddenContentOpen] = useState(false);

  return (
    <S.HiddenBlock
      onClick={() => setIsHiddenContentOpen(!isHiddenContentOpen)}
      $isHidden={!isHiddenContentOpen}
    >
      {children}
    </S.HiddenBlock>
  );
};
