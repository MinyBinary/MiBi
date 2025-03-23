/* eslint-disable */

import { TTheme } from 'shared/types/theme-types';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
