import { useState } from 'react';
import {
  bidCoin1Options,
  bidCoin2Options,
} from 'features/CreateBidForm/components/ui/BidBlock/constants/select-options';
import { EActiveBidButton } from 'features/CreateBidForm/components/ui/BidBlock/types/bid-block-types';
import { ISelectOption } from 'shared/components/ui';

interface IUseBidBlockLogicReturn {
  activeBidButton: EActiveBidButton | null;
  optionCoin1: ISelectOption;
  optionCoin2: ISelectOption;
  handleSelectBidValueCoin1Change: (option: ISelectOption) => void;
  handleSelectBidValueCoin2Change: (option: ISelectOption) => void;
  handleActiveBidButton: (value: EActiveBidButton) => void;
  clearBidBlockState: () => void;
}

export const useBidBlockLogic = (): IUseBidBlockLogicReturn => {
  const [optionCoin1, setOptionCoin1] = useState<ISelectOption>(bidCoin1Options[0]);
  const [optionCoin2, setOptionCoin2] = useState<ISelectOption>(bidCoin2Options[0]);

  const [activeBidButton, setActiveBidButton] = useState<EActiveBidButton | null>(null);
  const handleSelectBidValueCoin1Change = (option: ISelectOption) => {
    setOptionCoin1(option);
  };

  const handleSelectBidValueCoin2Change = (option: ISelectOption) => {
    setOptionCoin2(option);
  };

  const handleActiveBidButton = (activeIdeaButton: EActiveBidButton) => {
    setActiveBidButton(activeIdeaButton);
  };

  const clearBidBlockState = () => {
    setActiveBidButton(null);
    setOptionCoin1(bidCoin1Options[0]);
    setOptionCoin2(bidCoin2Options[0]);
  };

  return {
    activeBidButton,
    optionCoin1,
    optionCoin2,
    handleSelectBidValueCoin1Change,
    handleSelectBidValueCoin2Change,
    handleActiveBidButton,
    clearBidBlockState,
  };
};
