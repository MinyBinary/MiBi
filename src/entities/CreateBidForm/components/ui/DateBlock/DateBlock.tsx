import { type FC } from 'react';
import { StyledActiveButton } from 'entities/CreateBidForm/components/styled/StyledActiveButton';
import { BlockWrapper } from 'entities/CreateBidForm/components/styled/StyledBlockWrapper';
import { StyledButtonsWrapper } from 'entities/CreateBidForm/components/styled/StyledButtonsWrapper';
import { StyledInputsWrapper } from 'entities/CreateBidForm/components/styled/StyledInputsWrapper';
import { BlockDescription } from 'entities/CreateBidForm/components/ui/BlockDescription';
import { InputLocalTime } from 'entities/CreateBidForm/components/ui/InputLocalTime';
import { useCalendar } from 'features/Calendar';
import { useOverlay } from 'features/Overlay/logic/hooks/useOverlay';
import { EButtonVariant } from 'shared/components/ui';

import { EActiveDateButton } from './types/date-block-types';
import { formatCalendarDate } from './utils/formatCalendarDate';

import * as S from './DateBlock.styled';

interface IPropsDateBlock {
  activeDateButton: EActiveDateButton | null;
  handleActiveDateButton: (button: EActiveDateButton) => void;
}

export const DateBlock: FC<IPropsDateBlock> = ({ activeDateButton, handleActiveDateButton }) => {
  const {
    calendarRef,
    activeDate,
    firstRangeDate,
    secondRangeDate,
    CalendarComponent,
    openCalendar,
    setRangeMode,
    setDateMode,
  } = useCalendar({
    minDate: new Date(Date.now()),
  });

  const { showOverlay } = useOverlay();

  const formattedDate = formatCalendarDate({ activeDate, firstRangeDate, secondRangeDate });

  return (
    <BlockWrapper>
      <BlockDescription text="date / range" />
      <StyledInputsWrapper>
        <InputLocalTime />
        <StyledButtonsWrapper>
          <StyledActiveButton
            text="On the date"
            variant={EButtonVariant.Green}
            active={activeDateButton === EActiveDateButton.Date}
            $active={activeDateButton === EActiveDateButton.Date}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleActiveDateButton(EActiveDateButton.Date);
              setDateMode();
            }}
          />
          <StyledActiveButton
            text="In the range"
            variant={EButtonVariant.Green}
            active={activeDateButton === EActiveDateButton.Range}
            $active={activeDateButton === EActiveDateButton.Range}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleActiveDateButton(EActiveDateButton.Range);
              setRangeMode();
            }}
          />

          <input type="hidden" name="date-active-button" defaultValue={activeDateButton || ''} />
        </StyledButtonsWrapper>
        <S.DisabledInput
          placeholder="DD/MM/YY"
          name="date-input-value"
          defaultValue={formattedDate ?? undefined}
        >
          <S.StyledTimeAndDateIcon
            onClick={(e) => {
              e.preventDefault();
              if (activeDateButton) {
                handleActiveDateButton(activeDateButton);
              } else {
                handleActiveDateButton(EActiveDateButton.Date);
              }
              showOverlay(calendarRef.current?.id || '', calendarRef);
              openCalendar();
            }}
          />
          <CalendarComponent />
        </S.DisabledInput>
      </StyledInputsWrapper>
    </BlockWrapper>
  );
};
