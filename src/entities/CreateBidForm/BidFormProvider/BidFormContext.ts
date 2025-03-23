import { createContext } from 'react';
import { IBidFormContext } from 'entities/CreateBidForm/types/context-type';

export const BidFormContext = createContext<IBidFormContext | undefined>(undefined);
