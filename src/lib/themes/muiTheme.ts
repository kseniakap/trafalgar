import { createTheme } from '@mui/material';

import {
  COOL_GRAY_10,
  COOL_GRAY_100,
  COOL_GRAY_20,
  COOL_GRAY_30,
  COOL_GRAY_40,
  COOL_GRAY_50,
  COOL_GRAY_60,
  COOL_GRAY_70,
  COOL_GRAY_80,
  COOL_GRAY_90,
  ERROR,
  OVERLAY,
  PRIMARY_30,
  PRIMARY_60,
  PRIMARY_90,
  WARNING,
  WHITE,
} from '~/assets/style/colors';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

declare module '@mui/material/styles' {
  interface Palette {
    overlay: Palette['primary'];
    coolGray: {
      [key: string]: string;
    };
  }
  interface PaletteOptions {
    overlay?: PaletteOptions['primary'];
    coolGray?: {
      [key: string]: string;
    };
  }
}
const miniUnit = 8;

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_60,
      dark: PRIMARY_90,
      light: PRIMARY_30,
    },
    common: {
      white: WHITE,
    },
    error: {
      main: ERROR,
    },
    warning: {
      main: WARNING,
    },
    overlay: {
      main: OVERLAY,
    },
    coolGray: {
      'coolGray-100': COOL_GRAY_100,
      'coolGray-90': COOL_GRAY_90,
      'coolGray-80': COOL_GRAY_80,
      'coolGray-70': COOL_GRAY_70,
      'coolGray-60': COOL_GRAY_60,
      'coolGray-50': COOL_GRAY_50,
      'coolGray-40': COOL_GRAY_40,
      'coolGray-30': COOL_GRAY_30,
      'coolGray-20': COOL_GRAY_20,
      'coolGray-10': COOL_GRAY_10,
    },
  },
  spacing: (factor: number) => `${factor * miniUnit}px`,
  shape: {
    borderRadius: 0,
  },
  breakpoints: {
    values: {
      ...Breakpoints,
    },
  },
});

export default muiTheme;
