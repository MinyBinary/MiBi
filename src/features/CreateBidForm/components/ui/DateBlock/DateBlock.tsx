import type { FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';
import { Button, EButtonVariant } from 'shared/components/ui';

import * as S from './DateBlock.styled';

interface IPropsDateBlock {
  children?: React.ReactNode;
}

export const DateBlock: FC<IPropsDateBlock> = ({ children }) => {
  return (
    <BlockWrapper $gridArea="date">
      <BlockDescription text="date" />
      <S.DateBlock>
        {children}
        <Button $variant={EButtonVariant.Secondary} text="Create date"></Button>
        <Button $variant={EButtonVariant.Secondary} text="Create date"></Button>
        <Button $variant={EButtonVariant.Secondary} text="Create date"></Button>
      </S.DateBlock>
    </BlockWrapper>
  );
};
