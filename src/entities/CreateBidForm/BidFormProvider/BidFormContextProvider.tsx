import { FC, ReactNode, useEffect, useState } from 'react';

import { IRowState, ISaveBidFormRowData } from '../types/bid-form-types';

import { BidFormContext } from './BidFormContext';

export const BidFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [rowsState, setRowsState] = useState<IRowState[] | null>(null);

  useEffect(() => {
    const bidFormRowData = localStorage.getItem('bidFormRowsData');
    if (bidFormRowData) {
      setRowsState(JSON.parse(bidFormRowData));
    }
  }, []);

  useEffect(() => {
    if (rowsState !== null) {
      localStorage.setItem('bidFormRowsData', JSON.stringify(rowsState));
    }
  }, [rowsState]);

  const saveFormValuesToLocalStorage = ({ formValues }: ISaveBidFormRowData) => {
    const preparedData: IRowState = {
      id: Date.now().toString(16),
      inscription1: {
        name: formValues.name,
        comment: formValues.comment,
      },
      idea: {
        activeIdeaButton: formValues.activeIdeaButton,
        optionCoin: formValues.optionCoin as unknown as string,
        optionExchange: formValues.optionExchange as unknown as string,
        ideaRate: formValues.ideaRate,
      },
      date: {
        localDateValue: formValues.localDateValue,
      },
      expDate: {
        dateValue: formValues.dateValue,
        activeDateButton: formValues.activeDateButton,
      },
      bid: {
        activeBidButton: formValues.activeBidButton,
        optionCoin1: formValues.optionCoin1 as unknown as string,
        optionCoin2: formValues.optionCoin2 as unknown as string,
        bidAmount: formValues.bidAmount,
      },
      inscription2: '',
      status: 'ASK',
    };

    setRowsState((prevState) => (prevState ? [...prevState, preparedData] : [preparedData]));
  };

  return (
    <BidFormContext.Provider value={{ rowsState, saveFormValuesToLocalStorage }}>
      {children}
    </BidFormContext.Provider>
  );
};
