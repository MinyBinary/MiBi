import { type FC, useRef } from 'react';
import { StyledActiveButton } from 'entities/CreateBidForm/components/styled/StyledActiveButton';
import { BlockWrapper } from 'entities/CreateBidForm/components/styled/StyledBlockWrapper';
import { StyledButtonsWrapper } from 'entities/CreateBidForm/components/styled/StyledButtonsWrapper';
import { StyledInputsWrapper } from 'entities/CreateBidForm/components/styled/StyledInputsWrapper';
import { BlockDescription } from 'entities/CreateBidForm/components/ui/BlockDescription';
import { InputLocalTime } from 'entities/CreateBidForm/components/ui/InputLocalTime';
import { useCalendar } from 'features/Calendar';
import { EButtonVariant } from 'shared/components/ui';

import { EActiveDateButton } from './types/date-block-types';
import { formatCalendarDate } from './utils/formatCalendarDate';

import * as S from './DateBlock.styled';

interface IPropsDateBlock {
  dateValue: string;
  activeDateButton: EActiveDateButton | null;
  handleActiveDateButton: (button: EActiveDateButton) => void;
}

export const DateBlock: FC<IPropsDateBlock> = ({
  dateValue,
  activeDateButton,
  handleActiveDateButton,
}) => {
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  const {
    activeDate,
    firstRangeDate,
    secondRangeDate,
    CalendarComponent,
    openCalendar,
    setRangeMode,
    setDateMode,
  } = useCalendar({
    minDate: new Date(Date.now()),
    excludedCloseByOuterClickRefs: [buttonRef1, buttonRef2],
  });

  const formattedDate = formatCalendarDate({ activeDate, firstRangeDate, secondRangeDate });

  return (
    <BlockWrapper>
      <BlockDescription text="date / range" />
      <StyledInputsWrapper>
        <InputLocalTime />
        <StyledButtonsWrapper>
          <StyledActiveButton
            ref={buttonRef2}
            text="On the date"
            variant={EButtonVariant.Green}
            active={activeDateButton === EActiveDateButton.Date}
            $active={activeDateButton === EActiveDateButton.Date}
            onClick={(e) => {
              e.preventDefault();
              handleActiveDateButton(EActiveDateButton.Date);

              openCalendar();
              setDateMode();
            }}
          />
          <StyledActiveButton
            ref={buttonRef1}
            text="In the range"
            variant={EButtonVariant.Green}
            active={activeDateButton === EActiveDateButton.Range}
            $active={activeDateButton === EActiveDateButton.Range}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleActiveDateButton(EActiveDateButton.Range);

              openCalendar();
              setRangeMode();
            }}
          />

          <CalendarComponent />
          <input type="hidden" name="date-active-button" defaultValue={activeDateButton || ''} />
        </StyledButtonsWrapper>
        <S.DisabledInput
          placeholder="DD/MM/YY"
          name="date-input-value"
          defaultValue={formattedDate || dateValue}
        >
          <S.StyledTimeAndDateIcon
            onClick={(e) => {
              e.preventDefault();
              setDateMode();
              handleActiveDateButton(EActiveDateButton.Date);
              openCalendar();
            }}
          />
        </S.DisabledInput>
      </StyledInputsWrapper>
    </BlockWrapper>
  );
};
