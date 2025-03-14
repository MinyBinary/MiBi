import { useState } from 'react';
import { EActiveButton } from 'features/CreateBidForm/components/ui/IdeaBlock';
import {
  ideaCoinsOptions,
  ideaExchangesOptions,
} from 'features/CreateBidForm/components/ui/IdeaBlock/constants/select-options';
import { ISelectOption } from 'shared/components/ui';

interface IUseIdeaBlockLogicReturn {
  activeIdeaButton: EActiveButton | null;
  optionCoin: ISelectOption;
  optionExchange: ISelectOption;
  handleSelectValueCoinChange: (option: ISelectOption) => void;
  handleSelectValueExchangeChange: (option: ISelectOption) => void;
  handleActiveIdeaButtonClick: (value: EActiveButton) => void;
  clearIdeaBlockState: () => void;
}

export const useIdeaBlockLogic = (): IUseIdeaBlockLogicReturn => {
  const [optionCoin, setOptionCoin] = useState<ISelectOption>(ideaCoinsOptions[0]);
  const [optionExchange, setOptionExchange] = useState<ISelectOption>(ideaExchangesOptions[0]);

  const [activeIdeaButton, setActiveIdeaButton] = useState<EActiveButton | null>(null);
  const handleSelectValueCoinChange = (option: ISelectOption) => {
    setOptionCoin(option);
  };

  const handleSelectValueExchangeChange = (option: ISelectOption) => {
    setOptionExchange(option);
  };

  const handleActiveIdeaButtonClick = (activeIdeaButton: EActiveButton) => {
    setActiveIdeaButton(activeIdeaButton);
  };

  const clearIdeaBlockState = () => {
    setActiveIdeaButton(null);
    setOptionCoin(ideaCoinsOptions[0]);
    setOptionExchange(ideaExchangesOptions[0]);
  };

  return {
    activeIdeaButton,
    optionCoin,
    optionExchange,
    handleSelectValueCoinChange,
    handleSelectValueExchangeChange,
    handleActiveIdeaButtonClick,
    clearIdeaBlockState,
  };
};
