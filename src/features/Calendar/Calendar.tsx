import React, { forwardRef } from 'react';
import { View } from 'react-calendar/dist/cjs/shared/types';
import NextCalendarIcon from 'shared/assets/icons/arrows/next-calendar.svg?react';
import PrevCalendarIcon from 'shared/assets/icons/arrows/prev-calendar.svg?react';

import * as S from './Calendar.styled';

interface IPropsCalendar {
  isRange?: boolean;
  value?: [Date | null, Date | null] | Date | null;
  isOpen?: boolean;
  minDate?: Date;

  onValueChange: (newValue: Date | [Date, Date]) => void;
}

type TAddTittleClassNameFN = ({
  activeStartDate,
  date,
  view,
}: {
  activeStartDate: Date;
  date: Date;
  view: View;
}) => string;

export const Calendar = forwardRef<HTMLDivElement, IPropsCalendar>(
  ({ value, isRange, minDate, onValueChange }, ref) => {
    const addTittleClassName: TAddTittleClassNameFN = ({ activeStartDate, date, view }) => {
      if (!minDate) return '';
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (view === 'year') {
        const today = new Date();
        if (date.getFullYear() === today.getFullYear() && date.getMonth() < today.getMonth()) {
          return 'hidden-month';
        }
      }

      if (
        date < today &&
        date.getMonth() === activeStartDate.getMonth() &&
        date.getFullYear() === activeStartDate.getFullYear()
      ) {
        return 'disabled-date';
      }

      if (date < today && view === 'month' && date.getMonth() !== activeStartDate.getMonth()) {
        return 'neighboring-past-date';
      }

      if (date > today && view === 'month' && date.getMonth() !== activeStartDate.getMonth()) {
        return 'neighboring-future-date';
      }

      return '';
    };

    return (
      <div id="calendar">
        <S.StyledCalendar
          inputRef={ref}
          onChange={(newValue) => onValueChange(newValue as Date | [Date, Date])}
          selectRange={isRange}
          value={value ?? new Date(Date.now())}
          minDate={minDate}
          locale="en-EN"
          prevLabel={<PrevCalendarIcon />}
          nextLabel={<NextCalendarIcon />}
          tileClassName={addTittleClassName}
        />
      </div>
    );
  },
);
