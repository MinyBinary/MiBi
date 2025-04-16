import { buttonsThemeDark } from './buttons/buttons-theme-dark';
import { calendarThemeDark } from './calendar/calendar-theme-dark';
import { formsThemeDark } from './forms/forms-theme-dark';
import { inputsThemeDark } from './inputs/inputs-theme-dark';
import { linksThemeDark } from './links/links-theme-dark';
import { menuThemeDark } from './menu/menu-theme.dark';
import { popupsThemeDark } from './popups/popups-theme-dark';
import { selectsThemeDark } from './selects/selects-theme.dark';
import { textAreasThemeDark } from './textareas/textareas-theme-dark';
import { tittlesThemeDark } from './tittles/tittles-theme-dark';

export const darkTheme = {
  global: {
    color: {
      primary: '#FFFFFF',
      secondary: '#535363',
    },
    background: {
      primary: '#070708',
      secondary: '#1414174D',
      alter: '#070708',
      default: '#000000',
    },
  },

  buttons: { ...buttonsThemeDark },
  tittles: { ...tittlesThemeDark },
  links: { ...linksThemeDark },
  forms: { ...formsThemeDark },
  inputs: { ...inputsThemeDark },
  textAreas: { ...textAreasThemeDark },
  selects: { ...selectsThemeDark },
  popups: { ...popupsThemeDark },
  calendar: { ...calendarThemeDark },
  menu: { ...menuThemeDark },

  boxShadows: {
    primary: '0px',
  },
};
