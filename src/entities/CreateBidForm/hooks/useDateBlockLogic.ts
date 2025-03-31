import { useState } from 'react';
import { EActiveDateButton } from 'entities/CreateBidForm/components/ui/DateBlock/types/date-block-types';

interface IUseDateBlockLogicReturn {
  activeDateButton: EActiveDateButton | null;
  handleActiveDateButton: (value: EActiveDateButton) => void;
  clearDateBlockState: () => void;
}

export const useDateBlockLogic = (): IUseDateBlockLogicReturn => {
  const [activeDateButton, setActiveDateButton] = useState<EActiveDateButton | null>(null);

  const handleActiveDateButton = (activeDateButton: EActiveDateButton) => {
    setActiveDateButton(activeDateButton);
  };

  const clearDateBlockState = () => {
    setActiveDateButton(null);
  };

  return {
    activeDateButton,
    // dateValue,
    handleActiveDateButton,
    clearDateBlockState,
  };
};
