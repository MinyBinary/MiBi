import { ReactNode } from 'react';

export interface IUseCalendarProps {
  minDate?: Date;
  excludedCloseByOuterClickRefs?: React.RefObject<HTMLElement | null>[];
}

export interface IUseCalendarReturns {
  firstRangeDate?: string | null;
  secondRangeDate?: string | null;
  activeDate: Date | null;
  CalendarComponent: () => ReactNode | null;
  isCalendarOpen?: boolean;
  isRangeCalendarOpen?: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
  setRangeMode: () => void;
  setDateMode: () => void;
  calendarRef: React.RefObject<HTMLDivElement | null>;
}

export type Value = Date | [Date | null, Date | null] | null;
