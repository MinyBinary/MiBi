import { type FC, useEffect, useState } from 'react';
import { Input } from 'shared/components/ui';
import { getLocalDate } from 'shared/utils/date/getLocalDate';

export const InputLocalTime: FC = () => {
  const [localDateTime, setLocalDateTime] = useState<string>('');

  const localDate = getLocalDate('DD.MM.YYYY HH:mm:ss');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    timeoutId = setTimeout(() => {
      setLocalDateTime(localDate);
    }, 1000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [localDate]);

  return <Input placeholder="DD/MM/YY HH:MM:SS LOCAL " disabled value={localDateTime} />;
};
