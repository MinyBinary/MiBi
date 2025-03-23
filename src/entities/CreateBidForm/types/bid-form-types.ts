import { EActiveBidButton } from 'entities/CreateBidForm/components/ui/BidBlock/types/bid-block-types';
import { EActiveDateButton } from 'entities/CreateBidForm/components/ui/DateBlock/types/date-block-types';
import { EActiveButton } from 'entities/CreateBidForm/components/ui/IdeaBlock';
import { ISelectOption } from 'shared/components/ui';

export interface IRowState {
  id: string;
  inscription1: {
    name: string;
    comment: string;
  };
  idea: {
    activeIdeaButton: string;
    optionCoin: string;
    optionExchange: string;
    ideaRate: string;
  };
  date: {
    localDateValue: string;
  };
  expDate: {
    dateValue: string;
    activeDateButton: string;
  };
  bid: {
    activeBidButton: string;
    optionCoin1: string;
    optionCoin2: string;
    bidAmount: string;
  };
  inscription2: string;
  status: string;
}

export interface ISaveBidFormRowData {
  formValues: {
    name: string;
    comment: string;
    activeIdeaButton: EActiveButton;
    optionCoin: ISelectOption;
    optionExchange: ISelectOption;
    ideaRate: string;
    activeBidButton: EActiveBidButton;
    optionCoin1: ISelectOption;
    optionCoin2: ISelectOption;
    bidAmount: string;
    activeDateButton: EActiveDateButton;
    dateValue: string;
    localDateValue: string;
  };
}
