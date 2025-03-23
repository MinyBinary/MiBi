export type TColumnWidthsDesktop = [string, string, string, string, string, string, string, string];

export interface TRowProps {
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
