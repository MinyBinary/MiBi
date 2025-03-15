import { forwardRef } from 'react';

import * as S from './Calendar.styled';

interface IPropsCalendar {
  isRange?: boolean;
  value?: [Date | null, Date | null] | Date | null;
  isOpen?: boolean;
  onValueChange: (newValue: Date | [Date, Date]) => void;
}

export const Calendar = forwardRef<HTMLDivElement, IPropsCalendar>(
  ({ value, isRange, isOpen, onValueChange }, ref) => {
    return (
      <S.StyledCalendar
        inputRef={ref}
        $isOpen={isOpen}
        onChange={(newValue) => onValueChange(newValue as Date | [Date, Date])}
        selectRange={isRange}
        value={value ?? new Date(Date.now())}
        locale="en-EN"
      />
    );
  },
);
