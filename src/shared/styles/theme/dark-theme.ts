import { buttonsThemeDark } from './buttons/buttons-theme-dark';
import { formsThemeDark } from './forms/forms-theme-dark';
import { inputsThemeDark } from './inputs/inputs-theme-dark';
import { linksThemeDark } from './links/links-theme-dark';
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
    },
  },

  buttons: { ...buttonsThemeDark },
  tittles: { ...tittlesThemeDark },
  links: { ...linksThemeDark },
  forms: { ...formsThemeDark },
  inputs: { ...inputsThemeDark },
  textAreas: { ...textAreasThemeDark },
  selects: { ...selectsThemeDark },
};
