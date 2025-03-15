import Calendar from 'react-calendar';
import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const StyledCalendar = styled(Calendar)<{ $isOpen?: boolean }>`
  position: absolute;
  top: 110%;
  z-index: 9999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 285px;
  padding: 16px;
  border-radius: 4px;
  background: ${EColors.Back2};
  overflow: hidden;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          opacity: 1;
          transition: transform ${Durations.Fast} ease-in-out;
          transform-origin: top;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          transition: transform ${Durations.Fast} ease-in-out;
          user-select: none;
          pointer-events: none;
          transform-origin: top;
        `}

  @media (width <= 616px) {
    max-width: 100%;
  }

  /* Дни недели */

  .react-calendar__month-view__weekdays {
    font-family: ${EFontFamily.GeistMono} !important;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
    color: ${EColors.White1};
  }

  .react-calendar__month-view__weekdays__weekday abbr[title] {
    text-decoration: none !important;
  }

  /* Ячейки дней */

  .react-calendar__tile {
    height: 33px;
    border: none;
    background: ${EColors.Back2};
    text-align: center;
    color: ${EColors.White1};
    transition: all ${Durations.Fast} ease-in-out;

    &:hover {
      border: 1px solid ${EColors.Green1};
      color: ${EColors.Green1};
      cursor: pointer;
    }
  }

  /* Активная дата */

  .react-calendar__tile--active {
    color: ${EColors.Red1};

    &:hover {
      color: ${EColors.Green1};
    }
  }

  .react-calendar__tile--now {
    color: ${EColors.Black1};
  }

  /* Подсветка при наведении на диапазон */

  .react-calendar__tile--hover {
    background: ${EColors.Black3};
  }

  /* Выбранный диапазон */

  .react-calendar__tile--range {
    background: ${EColors.Black3};
    color: ${EColors.White1};

    &:hover {
      color: ${EColors.Green1};
    }
  }

  /* Начало и конец диапазона */

  .react-calendar__tile--rangeStart {
    border: 1px solid ${EColors.Green1};
    border-radius: 1px;
    background: ${EColors.Back2};
    color: ${EColors.Green1};
  }

  .react-calendar__tile--rangeEnd {
    border-radius: 1px;
    background: #14b48b;
    font-weight: bold;
    color: ${EColors.Back2};

    &:hover {
      color: ${EColors.Back2};
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${EColors.Black1};
  }

  .react-calendar__navigation {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 12px;
    width: 100%;
    padding: 0 0 16px;
  }

  .react-calendar__navigation__label {
    align-self: start;
    max-width: max-content;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .react-calendar__navigation__label__labelText {
    order: 1;
    font-family: ${EFontFamily.GeistMono};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.32px;
    text-transform: uppercase;
    color: ${EColors.White1};
    transition: opacity 0.3s ease;

    &:hover {
      color: ${EColors.Black1};
    }
  }

  .react-calendar__navigation button {
    max-width: max-content;
    border: none;
    background: transparent;
    font-size: 24px;
    color: ${EColors.White1};
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .react-calendar__navigation button:disabled {
    color: ${EColors.Black1};
    cursor: default;
  }

  .react-calendar__navigation button:hover {
    color: ${EColors.Black1};
  }

  .react-calendar__navigation__prev-button {
    order: 2;
    margin-left: auto;
  }

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next-button {
    order: 3;
    margin-left: 0;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }
`;
