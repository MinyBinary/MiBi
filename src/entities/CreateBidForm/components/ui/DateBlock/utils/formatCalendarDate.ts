import dayjs from 'dayjs';

export const formatCalendarDate = ({
  activeDate,
  firstRangeDate,
  secondRangeDate,
}: {
  activeDate: Date | null;
  firstRangeDate?: string | null;
  secondRangeDate?: string | null;
}): string | null => {
  if (firstRangeDate && secondRangeDate) {
    return `${firstRangeDate} - ${secondRangeDate}`;
  }

  return activeDate ? dayjs(new Date(activeDate)).format('DD.MM.YYYY') : null;
};
