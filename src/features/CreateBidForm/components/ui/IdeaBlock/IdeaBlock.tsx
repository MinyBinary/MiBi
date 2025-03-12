import type { FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';
import { EButtonVariant, Input } from 'shared/components/ui';

import { ideaCoinsOptions, ideaExchangesOptions } from './constants/select-options';

import * as S from './IdeaBlock.styled';

interface IPropsIdeaBlock {
  children?: React.ReactNode;
}

export const IdeaBlock: FC<IPropsIdeaBlock> = () => {
  return (
    <BlockWrapper>
      <BlockDescription text="idea" />
      <S.InputsWrapper>
        <S.SelectWrapper>
          <S.IdeaSelect
            options={ideaCoinsOptions}
            classNameDropDown="idea-select"
            dropDownHeight={115}
            placeholder="Coin"
          />
          <S.IdeaSelect
            options={ideaExchangesOptions}
            classNameDropDown="idea-select"
            placeholder="Exchange"
          />
        </S.SelectWrapper>
        <S.ButtonsWrapper>
          <S.RangeButton text="In the range" variant={EButtonVariant.Bordered} $active />
          <S.DateButton text="On the date" variant={EButtonVariant.Primary} />
        </S.ButtonsWrapper>
        <Input placeholder="Rate" />
      </S.InputsWrapper>
    </BlockWrapper>
  );
};
