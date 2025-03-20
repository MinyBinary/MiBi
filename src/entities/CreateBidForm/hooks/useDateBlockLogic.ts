import { useState } from 'react';
import dayjs from 'dayjs';
import { EActiveDateButton } from 'entities/CreateBidForm/components/ui/DateBlock/types/date-block-types';

interface IUseDateBlockLogicReturn {
  activeDateButton: EActiveDateButton | null;
  dateValue: string;
  handleActiveDateButton: (value: EActiveDateButton) => void;
  clearDateBlockState: () => void;
}

export const useDateBlockLogic = (): IUseDateBlockLogicReturn => {
  const [activeDateButton, setActiveDateButton] = useState<EActiveDateButton | null>(null);
  const [dateValue, setDateValue] = useState<string>('');

  const handleActiveDateButton = (activeDateButton: EActiveDateButton) => {
    setActiveDateButton(activeDateButton);
    setDateValue(dayjs().format('DD.MM.YYYY'));
  };

  const clearDateBlockState = () => {
    setActiveDateButton(null);
    setDateValue('');
  };

  return {
    activeDateButton,
    dateValue,
    handleActiveDateButton,
    clearDateBlockState,
  };
};
