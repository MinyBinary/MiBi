import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'features/Calendar';
import { useOverlay } from 'features/Overlay/logic/hooks/useOverlay';
import { EButtonVariant } from 'shared/components/ui';

import { IUseCalendarProps, IUseCalendarReturns, Value } from './types/useCalendar-types';

import { CloseCalendar, StyledCalendarWrapper } from 'features/Calendar/Calendar.styled';

export const useCalendar = ({ minDate }: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const [isRangeCalendarOpen, setIsRangeCalendarOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [activeButton, setActiveButton] = useState<'confirm' | 'cancel' | ''>('');

  const calendarRef = useRef<HTMLDivElement>(null);

  // const calendarRef = useClickOutside<HTMLDivElement>(
  //   () => setIsCalendarOpen(false),
  //   excludedCloseByOuterClickRefs,
  // );

  const handleDateRangeChange = (newValue: Date | [Date, Date]) => {
    if (Array.isArray(newValue)) {
      setValue([newValue[0], newValue[1]]);
    } else {
      setValue(newValue);
    }
  };

  const handleChangeActiveButton = (button: 'confirm' | 'cancel' | '') => setActiveButton(button);

  const { hideOverlay } = useOverlay();

  useEffect(() => {
    return () => {
      setActiveButton('');
    };
  }, [isCalendarOpen]);

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
          React.createElement(
            'div',
            {
              key: 'calendar-buttons',
              style: { display: 'flex', gap: '16px' },
            },
            [
              React.createElement(CloseCalendar, {
                key: 'calendar-confirm',
                text: 'confirm',
                variant: EButtonVariant.Green,
                $active: activeButton === 'confirm',
                active: activeButton === 'confirm',
                onClick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  hideOverlay();
                  setIsCalendarOpen(false);
                  handleChangeActiveButton('confirm');
                },
              }),
              React.createElement(CloseCalendar, {
                key: 'calendar-cancel',
                text: 'cancel',
                variant: EButtonVariant.Green,
                $active: activeButton === 'cancel',
                active: activeButton === 'cancel',
                onClick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  hideOverlay();
                  setIsCalendarOpen(false);
                  handleChangeActiveButton('cancel');
                },
              }),
            ],
          ),
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
    calendarRef,
  };
};
