import { ReactNode, useState } from 'react';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import { Calendar } from '../Calendar';

interface IUseCalendarProps {
  isRange?: boolean;
  excludedCloseByOuterClickRefs?: React.RefObject<HTMLElement | null>[];
}

interface IUseCalendarReturns {
  firstRangeDate?: string | null;
  secondRangeDate?: string | null;
  activeDate: Date | null;
  CalendarComponent: () => ReactNode;
  isCalendarOpen?: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
}

type Value = Date | [Date | null, Date | null] | null;

export const useCalendar = ({
  isRange,
  excludedCloseByOuterClickRefs,
}: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useClickOutside<HTMLDivElement>(
    () => setIsCalendarOpen(false),
    excludedCloseByOuterClickRefs,
  );
  const handleDateRangeChange = (newValue: Date | [Date, Date]) => {
    if (Array.isArray(newValue)) {
      setValue([newValue[0], newValue[1]]);
    } else {
      setValue(newValue);
    }
  };

  return {
    CalendarComponent: () => (
      <Calendar
        ref={calendarRef}
        value={value}
        onValueChange={handleDateRangeChange}
        isRange={isRange}
        isOpen={isCalendarOpen}
      />
    ),
    activeDate: value as Date,
    firstRangeDate: Array.isArray(value) ? value[0]?.toLocaleDateString() : null,
    secondRangeDate: Array.isArray(value) ? value[1]?.toLocaleDateString() : null,
    isCalendarOpen,
    openCalendar: () => setIsCalendarOpen(true),
    closeCalendar: () => setIsCalendarOpen(false),
  };
};
