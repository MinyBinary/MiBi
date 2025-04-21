import { bidTableThemeLight } from './bidTable/bidTable-theme.light';
import { buttonsThemeLight } from './buttons/buttons-theme-light';
import { calendarThemeLight } from './calendar/calendar-theme-light';
import { formsThemeLight } from './forms/forms-theme-light';
import { inputsThemeLight } from './inputs/inputs-theme-light';
import { linksThemeLight } from './links/links-theme-light';
import { menuThemeLight } from './menu/menu-theme.light';
import { popupsThemeLight } from './popups/popups-theme-light';
import { selectsThemeLight } from './selects/selects-theme.light';
import { textAreasThemeLight } from './textareas/textareas-theme-light';
import { tittlesThemeLight } from './tittles/tittles-theme-light';

export const lightTheme = {
  global: {
    color: {
      primary: '#1A1A1A',
      secondary: '#777777',
    },
    background: {
      primary: '#FFFFFFFF',
      secondary: '#F6F6F6',
      alter: '#FFFFFF',
      default: '#FFFFFF',
    },
  },

  buttons: { ...buttonsThemeLight },
  tittles: { ...tittlesThemeLight },
  links: { ...linksThemeLight },
  forms: { ...formsThemeLight },
  inputs: { ...inputsThemeLight },
  textAreas: { ...textAreasThemeLight },
  selects: { ...selectsThemeLight },
  popups: { ...popupsThemeLight },
  calendar: { ...calendarThemeLight },
  menu: { ...menuThemeLight },
  bidTable: { ...bidTableThemeLight },

  boxShadows: {
    primary: '0px 7px 29px 0px rgba(100, 100, 111, 0.3)',
  },
};
