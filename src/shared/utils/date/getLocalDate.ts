import dayjs from 'dayjs';

export const getLocalDate = (format: string): string => {
  return dayjs().tz(dayjs.tz.guess()).format(format);
};
