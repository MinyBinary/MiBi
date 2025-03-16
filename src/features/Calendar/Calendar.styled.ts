import Calendar from 'react-calendar';
import { Button } from 'shared/components/ui';
import { Durations, EColors, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const StyledCalendarWrapper = styled.div`
  position: absolute;
  top: 110%;
  z-index: 9999;
  padding: 16px;
  background: ${EColors.Back2};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TimeModeButton = styled(Button)<{ $active: boolean }>`
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  text-transform: uppercase;

  ${({ $active }) =>
    $active
      ? css`
          border-color: ${EColors.Green1};
          background: ${EColors.Green5};
          color: ${EColors.Green1};

          &:hover {
            border-color: ${EColors.Green4};
          }
        `
      : css`
          border-color: ${EColors.Black4};
          color: ${EColors.White1};

          &:hover {
            border-color: ${EColors.Black1};
          }
        `}

  @media (width <= 616px) {
    padding: 8px;
  }
`;

export const StyledCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 285px;
  border-radius: 4px;
  overflow: hidden;

  @media (width <= 616px) {
    max-width: 100%;
  }

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

  .hidden-month {
    display: none;
  }

  .disabled-date {
    color: ${EColors.Black1} !important;
    cursor: default !important;

    &:hover {
      border: 1px solid ${EColors.Black1};
    }
  }

  .react-calendar__tile--active {
    color: ${EColors.Red1};

    &:hover {
      color: ${EColors.Green1};
    }
  }

  .react-calendar__tile--now {
    color: ${EColors.Green1};
  }

  .react-calendar__tile--hover {
    background: ${EColors.Black3};
  }

  .react-calendar__tile--range {
    background: ${EColors.Black3};
    color: ${EColors.White1};

    &:hover {
      color: ${EColors.Green1};
    }
  }

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

  .neighboring-past-date {

    &:hover {
      border: 1px solid ${EColors.Black1};
      color: ${EColors.Black1};
      cursor: default;
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
    margin: 0 0 16px;
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
    border: none;
    background: transparent;
    color: ${EColors.White1};
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .react-calendar__navigation button:disabled {
    cursor: default;

    & svg path {
      transition: fill ${Durations.Fast} ease-in-out;
      fill: ${EColors.Black1};
    }
  }

  .react-calendar__navigation button:hover {

    & svg path {
      transition: fill ${Durations.Fast} ease-in-out;
      fill: ${EColors.Black1};
    }
  }

  .react-calendar__navigation__prev-button {
    order: 2;
    max-width: 16px;
    margin-left: auto;
  }

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next-button {
    order: 3;
    max-width: 16px;
    margin-right: 2px;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }
`;
