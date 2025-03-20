import React, { useEffect, useState } from 'react';
import { Calendar } from 'features/Calendar';
import { EButtonVariant } from 'shared/components/ui';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import { IUseCalendarProps, IUseCalendarReturns, Value } from './types/useCalendar-types';

import { CloseCalendar, StyledCalendarWrapper } from 'features/Calendar/Calendar.styled';

export const useCalendar = ({
  minDate,
  excludedCloseByOuterClickRefs,
}: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const [isRangeCalendarOpen, setIsRangeCalendarOpen] = useState(false);
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

  useEffect(() => {
    setValue(null);
  }, [isRangeCalendarOpen]);

  return {
    CalendarComponent: () => {
      if (!isCalendarOpen) return null;

      return React.createElement(
        StyledCalendarWrapper,
        {
          key: 'calendar-wrapper',
        },
        [
          React.createElement(Calendar, {
            key: 'calendar',
            ref: calendarRef,
            value: value,
            onValueChange: handleDateRangeChange,
            isRange: isRangeCalendarOpen,
            isOpen: true,
            minDate: minDate,
          }),
          React.createElement(CloseCalendar, {
            key: 'calendar-close',
            text: 'Submit',
            variant: EButtonVariant.Bordered,
            onClick: (e) => {
              e.stopPropagation();
              e.preventDefault();

              setIsCalendarOpen(false);
            },
          }),
        ],
      );
    },
    activeDate: value as Date,
    firstRangeDate: Array.isArray(value) ? value[0]?.toLocaleDateString() : null,
    secondRangeDate: Array.isArray(value) ? value[1]?.toLocaleDateString() : null,
    isCalendarOpen,
    isRangeCalendarOpen,
    openCalendar: () => setIsCalendarOpen(true),
    closeCalendar: () => setIsCalendarOpen(false),
    setRangeMode: () => setIsRangeCalendarOpen(true),
    setDateMode: () => setIsRangeCalendarOpen(false),
  };
};
