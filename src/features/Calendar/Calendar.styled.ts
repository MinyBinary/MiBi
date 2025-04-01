import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { Button } from 'shared/components/ui';
import { Durations, EFontFamily } from 'shared/styles/style-variables';
import styled, { css } from 'styled-components';

export const StyledCalendarWrapper = styled(motion.div)`
  position: absolute;
  top: 115%;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.calendar.primary.background.primary};
  pointer-events: all;
  will-change: transform, opacity;
  transform-origin: top;
`;

export const StyledCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 100%;
  border-radius: 4px;
  overflow: hidden;

  .react-calendar__month-view__weekdays {
    font-family: ${EFontFamily.GeistMono} !important;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.calendar.primary.color.primary};
  }

  .react-calendar__month-view__weekdays__weekday abbr[title] {
    text-decoration: none !important;
  }

  .react-calendar__month-view__days {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile {
    width: 33px;
    height: 33px;
    border: none;
    background: ${({ theme }) => theme.calendar.primary.background.primary};
    text-align: center;
    color: ${({ theme }) => theme.calendar.primary.color.primary} !important;
    transition: all ${Durations.Fast} ease-in-out;

    &:hover {
      border: 1px solid ${({ theme }) => theme.calendar.primary.color.hover};
      color: ${({ theme }) => theme.calendar.primary.color.hover};
      cursor: pointer;
    }
  }

  .hidden-month {
    display: none;
  }

  .disabled-date {
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
    cursor: default !important;

    &:hover {
      border: 1px solid ${({ theme }) => theme.calendar.primary.color.hoverDisabled};
    }
  }

  .react-calendar__tile--now {
    color: ${({ theme }) => theme.calendar.primary.color.active};
  }

  .react-calendar__tile--hover {
    color: ${({ theme }) => theme.calendar.primary.color.primary} !important;
  }

  .react-calendar__tile--range {
    background: ${({ theme }) => theme.calendar.primary.background.secondary};
    color: ${({ theme }) => theme.calendar.primary.color.primary} !important;

    &:hover {
      color: ${({ theme }) => theme.calendar.primary.color.primary} !important;
    }
  }

  .react-calendar__tile--rangeStart {
    border: 1px solid ${({ theme }) => theme.calendar.primary.color.active};
    border-radius: 1px;
    background: transparent;
    color: ${({ theme }) => theme.calendar.primary.color.active};
  }

  .react-calendar__tile--rangeEnd {
    border-radius: 1px;
    background: ${({ theme }) => theme.calendar.primary.background.active};
    font-weight: bold;
    color: ${({ theme }) => theme.calendar.primary.color.secondary}!important;
  }

  .neighboring-past-date {
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;

    &:hover {
      border: 1px solid ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
      color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
      cursor: default !important;
    }
  }

  .neighboring-future-date {

    &:hover {
      border: 1px solid ${({ theme }) => theme.calendar.primary.color.hover} !important;
      color: ${({ theme }) => theme.calendar.primary.color.primary} !important;
    }
  }

  .neighboring-future-date:not(.react-calendar__tile--range, .react-calendar__tile--hover) {
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled};

    &:hover {
      border: 1px solid ${({ theme }) => theme.calendar.primary.color.hover};
    }
  }

  .react-calendar__tile--hover + .disabled-date {
    background: transparent !important;
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
  }

  .react-calendar__tile--hover + .neighboring-past-date {
    background: ${({ theme }) => theme.calendar.primary.background.primary} !important;
    color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
  }

  .react-calendar__tile--hover:not(
      .disabled-date,
      .neighboring-past-date,
      .react-calendar__tile--rangeStart,
      .react-calendar__tile--rangeEnd
    ) {
    background: ${({ theme }) => theme.calendar.primary.background.secondary};
  }

  .disabled-date + .react-calendar__tile--hover {

    &:hover {
      color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled} !important;
    }
  }

  .neighboring-future-date + .react-calendar__tile--rangeEnd {

    &:hover {
      color: ${({ theme }) => theme.calendar.primary.color.secondary} !important;
    }
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
    color: ${({ theme }) => theme.calendar.primary.color.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.calendar.primary.color.hoverDisabled};
    }
  }

  .react-calendar__navigation button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.calendar.primary.color.primary};
    transition: color 0.3s ease;
    cursor: pointer;

    & svg path {
      transition: fill ${Durations.Fast} ease-in-out;
      fill: ${({ theme }) => theme.calendar.primary.color.primary};
    }
  }

  .react-calendar__navigation button:disabled {
    cursor: default;

    & svg path {
      transition: fill ${Durations.Fast} ease-in-out;
      fill: ${({ theme }) => theme.calendar.primary.color.hoverDisabled};
    }
  }

  .react-calendar__navigation button:hover {

    & svg path {
      transition: fill ${Durations.Fast} ease-in-out;
      fill: ${({ theme }) => theme.calendar.primary.color.hoverDisabled};
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

export const CalendarButtonsWrapper = styled.div`
  display: flex;
  padding: 16px 0 0;
  border-top: 2px solid ${({ theme }) => theme.calendar.primary.color.secondary};
`;

export const CalendarButton = styled(Button)<{ $active?: boolean }>`
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.buttons.green.color.active};
    `}
`;
