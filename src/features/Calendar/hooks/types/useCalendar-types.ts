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
  openCalendar: () => void;
  closeCalendar: () => void;
}

export type Value = Date | [Date | null, Date | null] | null;
