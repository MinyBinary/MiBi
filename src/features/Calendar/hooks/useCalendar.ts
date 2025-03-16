import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'features/Calendar';
import { EButtonVariant } from 'shared/components/ui';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import { IUseCalendarProps, IUseCalendarReturns, Value } from './types/useCalendar-types';

import {
  ButtonsWrapper,
  StyledCalendarWrapper,
  TimeModeButton,
} from 'features/Calendar/Calendar.styled';

export const useCalendar = ({
  minDate,
  excludedCloseByOuterClickRefs,
}: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  const [isRangeCalendarOpen, setIsRangeCalendarOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useClickOutside<HTMLDivElement>(
    () => setIsCalendarOpen(false),
    excludedCloseByOuterClickRefs
      ? [...excludedCloseByOuterClickRefs, buttonRef2, buttonRef3]
      : [buttonRef2, buttonRef3],
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
          React.createElement(
            ButtonsWrapper,
            {
              key: 'buttons-wrapper',
            },
            [
              React.createElement(TimeModeButton, {
                key: 'time-mode-button',
                ref: buttonRef2,
                variant: EButtonVariant.Bordered,
                $active: isRangeCalendarOpen === true,
                text: 'In the range',
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsRangeCalendarOpen(true);
                },
              }),
              React.createElement(TimeModeButton, {
                key: 'date-mode-button',
                ref: buttonRef3,
                variant: EButtonVariant.Bordered,
                $active: isRangeCalendarOpen === false,
                text: 'On the date',
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsRangeCalendarOpen(false);
                },
              }),
            ],
          ),
          React.createElement(Calendar, {
            key: 'calendar',
            ref: calendarRef,
            value: value,
            onValueChange: handleDateRangeChange,
            isRange: isRangeCalendarOpen,
            isOpen: isCalendarOpen,
            minDate: minDate,
          }),
        ],
      );
    },
    activeDate: value as Date,
    firstRangeDate: Array.isArray(value) ? value[0]?.toLocaleDateString() : null,
    secondRangeDate: Array.isArray(value) ? value[1]?.toLocaleDateString() : null,
    isCalendarOpen,
    openCalendar: () => setIsCalendarOpen(true),
    closeCalendar: () => setIsCalendarOpen(false),
  };
};
