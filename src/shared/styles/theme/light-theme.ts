import { buttonsThemeLight } from './buttons/buttons-theme-light';
import { formsThemeLight } from './forms/forms-theme-light';
import { inputsThemeLight } from './inputs/inputs-theme-light';
import { linksThemeLight } from './links/links-theme-light';
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
      primary: '#D7D7D74D',
      secondary: '#EBEBEB',
    },
  },

  buttons: { ...buttonsThemeLight },
  tittles: { ...tittlesThemeLight },
  links: { ...linksThemeLight },
  forms: { ...formsThemeLight },
  inputs: { ...inputsThemeLight },
  textAreas: { ...textAreasThemeLight },
  selects: { ...selectsThemeLight },
};
