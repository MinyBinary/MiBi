import { IRowState, ISaveBidFormRowData } from './bid-form-types';

export interface IBidFormContext {
  rowsState: IRowState[] | null;
  saveFormValuesToLocalStorage: (data: ISaveBidFormRowData) => void;
}
