import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'features/Calendar';
import { useOverlay } from 'features/Overlay/logic/hooks/useOverlay';
import { EButtonVariant } from 'shared/components/ui';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';

import { IUseCalendarProps, IUseCalendarReturns, Value } from './types/useCalendar-types';

import { CloseCalendar, StyledCalendarWrapper } from 'features/Calendar/Calendar.styled';

export const useCalendar = ({ minDate }: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const [isRangeCalendarOpen, setIsRangeCalendarOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isMobile = document.body.clientWidth <= parseInt(BreakPointsV2.MobileLarge);

  const calendarRef = useRef<HTMLDivElement>(null);
  const { hideOverlay } = useOverlay();

  const handleDateRangeChange = (newValue: Date | [Date, Date]) => {
    if (Array.isArray(newValue)) {
      setValue([newValue[0], newValue[1]]);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    if ((isCalendarOpen && isMobile) || (isRangeCalendarOpen && isMobile)) {
      calendarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isRangeCalendarOpen, isCalendarOpen, isMobile]);

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
                onClick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  if (!value) {
                    setValue(dayjs().toDate());
                  }

                  hideOverlay();
                  setIsCalendarOpen(false);
                },
              }),
              React.createElement(CloseCalendar, {
                key: 'calendar-cancel',
                text: 'cancel',
                variant: EButtonVariant.Green,
                onClick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setValue(null);
                  setIsCalendarOpen(false);
                  hideOverlay();
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
