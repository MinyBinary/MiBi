import { useContext } from 'react';
import { BidFormContext } from 'entities/CreateBidForm/BidFormProvider/BidFormContext';
import { IBidFormContext } from 'entities/CreateBidForm/types/context-type';

export const useBidForm = (): IBidFormContext => {
  const context = useContext(BidFormContext);
  if (!context) {
    throw new Error('useBidForm must be used within a BidFormProvider');
  }
  return context;
};
