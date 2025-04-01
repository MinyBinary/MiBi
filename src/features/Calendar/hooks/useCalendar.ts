import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'features/Calendar/Calendar';
import { useOverlay } from 'features/Overlay/logic/hooks/useOverlay';
import { AnimatePresence } from 'framer-motion';
import { EButtonVariant } from 'shared/components/ui';
import { Durations } from 'shared/styles/style-variables';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';

import { IUseCalendarProps, IUseCalendarReturns, Value } from './types/useCalendar-types';

import {
  CalendarButton,
  CalendarButtonsWrapper,
  StyledCalendarWrapper,
} from 'features/Calendar/Calendar.styled';

export const useCalendar = ({ minDate }: IUseCalendarProps): IUseCalendarReturns => {
  const [value, setValue] = useState<Value>(null);
  const [isRangeCalendarOpen, setIsRangeCalendarOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isMobile = document.body.clientWidth <= parseInt(BreakPointsV2.MobileLarge);

  const isAnimated = useRef(true);

  const calendarRef = useRef<HTMLDivElement>(null);

  const { hideOverlay } = useOverlay();

  const handleDateRangeChange = (newValue: Date | [Date, Date]) => {
    isAnimated.current = false;
    if (Array.isArray(newValue)) {
      setValue([newValue[0], newValue[1]]);
    } else {
      setValue(newValue);
    }
  };

  const animationProps = isAnimated.current && {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      opacity: { duration: parseFloat(Durations.Fast), ease: 'easeOut' },
    },
  };

  useEffect(() => {
    if ((isCalendarOpen && isMobile) || (isRangeCalendarOpen && isMobile)) {
      calendarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return () => {
      isAnimated.current = true;
    };
  }, [isRangeCalendarOpen, isCalendarOpen, isMobile]);

  return {
    CalendarComponent: () => {
      if (!isCalendarOpen) return null;

      return React.createElement(AnimatePresence, { key: 'calendar-component-animate-presence' }, [
        React.createElement(
          StyledCalendarWrapper,
          {
            key: 'calendar-wrapper',
            ...animationProps,
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
              CalendarButtonsWrapper,
              {
                key: 'calendar-buttons',
                style: { display: 'flex', gap: '16px' },
              },
              [
                React.createElement(CalendarButton, {
                  key: 'calendar-confirm',
                  text: 'confirm',
                  variant: EButtonVariant.Green,
                  $active: true,
                  active: true,
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
                React.createElement(CalendarButton, {
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
        ),
      ]);
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
