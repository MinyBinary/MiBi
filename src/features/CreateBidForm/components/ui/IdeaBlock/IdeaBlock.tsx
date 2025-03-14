import { type FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';
import TriangleRedDownIcon from 'shared/assets/icons/arrows/triangle-filled-down.svg?react';
import TriangleGreenUpIcon from 'shared/assets/icons/arrows/triangle-filled-up.svg?react';
import { EButtonVariant, Input, ISelectOption } from 'shared/components/ui';

import { ideaCoinsOptions, ideaExchangesOptions } from './constants/select-options';
import { EActiveButton } from './types/Idea-block-types';

import * as S from './IdeaBlock.styled';

interface IPropsIdeaBlock {
  activeIdeaButton: EActiveButton | null;
  optionCoin: ISelectOption;
  optionExchange: ISelectOption;
  handleSelectValueCoinChange: (option: ISelectOption) => void;
  handleSelectValueExchangeChange: (option: ISelectOption) => void;
  handleActiveIdeaButton: (value: EActiveButton) => void;
}

export const IdeaBlock: FC<IPropsIdeaBlock> = ({
  activeIdeaButton,
  optionCoin,
  optionExchange,
  handleSelectValueCoinChange,
  handleSelectValueExchangeChange,
  handleActiveIdeaButton,
}) => {
  return (
    <BlockWrapper $gridArea="idea">
      <BlockDescription text="idea" />
      <S.InputsWrapper>
        <S.SelectWrapper>
          <S.IdeaSelect
            current={optionCoin ? optionCoin : undefined}
            options={ideaCoinsOptions}
            dropDownHeight={115}
            placeholder="Coin"
            handleSelect={handleSelectValueCoinChange}
          />
          <S.IdeaSelect
            current={optionExchange ? optionExchange : undefined}
            options={ideaExchangesOptions}
            dropDownHeight={115}
            placeholder="Exch."
            handleSelect={handleSelectValueExchangeChange}
          />
        </S.SelectWrapper>
        <S.ButtonsWrapper>
          <S.RangeButton
            text="Above"
            $variant={EButtonVariant.Bordered}
            icon={<TriangleGreenUpIcon />}
            $active={activeIdeaButton === EActiveButton.Above}
            onClick={(e) => {
              e.preventDefault();
              handleActiveIdeaButton(EActiveButton.Above);
            }}
          />
          <S.DateButton
            text="Below"
            $variant={EButtonVariant.Bordered}
            icon={<TriangleRedDownIcon />}
            $active={activeIdeaButton === EActiveButton.Below}
            onClick={(e) => {
              e.preventDefault();
              handleActiveIdeaButton(EActiveButton.Below);
            }}
          />
          <input type="hidden" name="idea-active-button" value={activeIdeaButton || ''} />
          <input type="hidden" name="idea-coin" value={optionCoin?.value || ''} />
          <input type="hidden" name="idea-exchange" value={optionExchange?.value || ''} />
        </S.ButtonsWrapper>
        <Input placeholder="Rate" name="idea-input-rate" />
      </S.InputsWrapper>
    </BlockWrapper>
  );
};
