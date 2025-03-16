import { type FC, useRef } from 'react';
import { useCalendar } from 'features/Calendar';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';
import { EButtonVariant } from 'shared/components/ui';

import * as S from './DateBlock.styled';

interface IPropsDateBlock {
  children?: React.ReactNode;
}

export const DateBlock: FC<IPropsDateBlock> = ({ children }) => {
  const buttonRef1 = useRef<HTMLButtonElement>(null);

  const { CalendarComponent, openCalendar, closeCalendar, isCalendarOpen } = useCalendar({
    minDate: new Date(Date.now()),
    excludedCloseByOuterClickRefs: [buttonRef1],
  });

  return (
    <BlockWrapper>
      <BlockDescription text="date / range" />
      <S.DateBlock>
        {children}
        <S.OpenCalBtn
          ref={buttonRef1}
          variant={EButtonVariant.Secondary}
          text={isCalendarOpen ? 'Close calendar' : 'Open calendar'}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isCalendarOpen) {
              closeCalendar();
            } else {
              openCalendar();
            }
          }}
        />

        <CalendarComponent />
      </S.DateBlock>
    </BlockWrapper>
  );
};
