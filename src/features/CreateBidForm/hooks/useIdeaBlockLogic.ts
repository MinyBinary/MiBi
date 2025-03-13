import { useState } from 'react';
import { EActiveButton } from 'features/CreateBidForm/components/ui/IdeaBlock';
import { ISelectOption } from 'shared/components/ui';

interface IUseIdeaBlockLogicReturn {
  activeIdeaButton: EActiveButton | null;
  optionCoin: ISelectOption | null;
  optionExchange: ISelectOption | null;
  handleSelectValueCoinChange: (option: ISelectOption) => void;
  handleSelectValueExchangeChange: (option: ISelectOption) => void;
  handleActiveIdeaButtonClick: (value: EActiveButton) => void;
  clearIdeaBlockState: () => void;
}

export const useIdeaBlockLogic = (): IUseIdeaBlockLogicReturn => {
  const [optionCoin, setOptionCoin] = useState<ISelectOption | null>(null);
  const [optionExchange, setOptionExchange] = useState<ISelectOption | null>(null);

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
    setOptionCoin(null);
    setOptionExchange(null);
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
