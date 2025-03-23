import { type FC, useEffect, useState } from 'react';
import { getLocalDate } from 'shared/utils/date/getLocalDate';

import * as S from './InputLocalTime.styled';

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

  return (
    <S.LocalTimeInput
      placeholder="DD/MM/YY HH:MM:SS LOCAL "
      defaultValue={localDateTime}
      name="local-date-input-value"
    />
  );
};
