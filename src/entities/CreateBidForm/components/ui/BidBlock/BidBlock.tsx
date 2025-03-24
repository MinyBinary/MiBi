import type { FC } from 'react';
import { StyledActiveButton } from 'entities/CreateBidForm/components/styled/StyledActiveButton';
import { BlockWrapper } from 'entities/CreateBidForm/components/styled/StyledBlockWrapper';
import { StyledInputsWrapper } from 'entities/CreateBidForm/components/styled/StyledInputsWrapper';
import { BlockDescription } from 'entities/CreateBidForm/components/ui/BlockDescription';
import UserSingleIcon from 'shared/assets/icons/users/user-single.svg?react';
import UsersMultiIcon from 'shared/assets/icons/users/users-multi.svg?react';
import { EButtonVariant, Input, ISelectOption } from 'shared/components/ui';

import { StyledButtonsWrapper } from '../../styled/StyledButtonsWrapper';

import { bidCoin1Options, bidCoin2Options } from './constants/select-options';
import { EActiveBidButton } from './types/bid-block-types';

import * as S from './BidBlock.styled';

interface IPropsBidBlock {
  activeBidButton: EActiveBidButton | null;
  optionCoin1: ISelectOption;
  optionCoin2: ISelectOption;
  handleSelectBidValueCoin1Change: (option: ISelectOption) => void;
  handleSelectBidValueCoin2Change: (option: ISelectOption) => void;
  handleActiveBidButton: (value: EActiveBidButton) => void;
}

export const BidBlock: FC<IPropsBidBlock> = ({
  activeBidButton,
  optionCoin1,
  optionCoin2,
  handleSelectBidValueCoin1Change,
  handleSelectBidValueCoin2Change,
  handleActiveBidButton,
}) => {
  return (
    <BlockWrapper>
      <BlockDescription text="bid" />
      <StyledInputsWrapper>
        <S.SelectWrapper>
          <S.BidSelect
            current={optionCoin1 ? optionCoin1 : undefined}
            options={bidCoin1Options}
            dropDownHeight={115}
            placeholder="Coin"
            handleSelect={handleSelectBidValueCoin1Change}
          />
          <S.BidSelect
            current={optionCoin2 ? optionCoin2 : undefined}
            options={bidCoin2Options}
            dropDownHeight={115}
            placeholder="Coin"
            handleSelect={handleSelectBidValueCoin2Change}
          />
        </S.SelectWrapper>
        <StyledButtonsWrapper>
          <StyledActiveButton
            text="VS"
            icon={<UserSingleIcon />}
            icon2={<UserSingleIcon />}
            itemsGap={14}
            variant={EButtonVariant.Green}
            active={activeBidButton === EActiveBidButton.Single}
            $active={activeBidButton === EActiveBidButton.Single}
            onClick={(e) => {
              e.preventDefault();
              handleActiveBidButton(EActiveBidButton.Single);
            }}
          />
          <StyledActiveButton
            text="VS"
            icon={<UsersMultiIcon />}
            icon2={<UserSingleIcon />}
            itemsGap={14}
            variant={EButtonVariant.Green}
            active={activeBidButton === EActiveBidButton.Multi}
            $active={activeBidButton === EActiveBidButton.Multi}
            onClick={(e) => {
              e.preventDefault();
              handleActiveBidButton(EActiveBidButton.Multi);
            }}
          />
          <input type="hidden" name="bid-active-button" value={activeBidButton || ''} />
          <input type="hidden" name="bid-coin1" value={optionCoin1?.value || ''} />
          <input type="hidden" name="bid-coin2" value={optionCoin2?.value || ''} />
        </StyledButtonsWrapper>
        <Input placeholder="amount" name="bid-input-amount" />
      </StyledInputsWrapper>
    </BlockWrapper>
  );
};
