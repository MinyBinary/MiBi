import type { FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';
import { Button, EButtonVariant } from 'shared/components/ui';

import * as S from './BidBlock.styled';

interface IPropsBidBlock {
  children?: React.ReactNode;
}

export const BidBlock: FC<IPropsBidBlock> = ({ children }) => {
  return (
    <BlockWrapper $gridArea="bid">
      <BlockDescription text="bid" />
      <S.BidBlock>
        {children}
        <Button $variant={EButtonVariant.Secondary} text="Create bid"></Button>
      </S.BidBlock>
    </BlockWrapper>
  );
};
