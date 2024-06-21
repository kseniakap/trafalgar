import { createTheme } from '@mui/material';

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
      main: '#0F62FE',
      dark: '#003D87',
      light: '#A6C8FF',
    },
    common: {
      white: '#FFFFFF',
    },
    error: {
      main: '#DA1E28',
    },
    warning: {
      main: '#DA1E28',
    },
    overlay: {
      main: 'rgba(18, 22, 25, 0.5)',
    },
    coolGray: {
      'coolGray-100': '#121619',
      'coolGray-90': '#21272a',
      'coolGray-80': '#343a3f',
      'coolGray-70': '#4d5358',
      'coolGray-60': '#697077',
      'coolGray-50': '#878d96',
      'coolGray-40': '#a2a9b0',
      'coolGray-30': '#c1c7cd',
      'coolGray-20': '#dde1e6',
      'coolGray-10': '#f2f4f8',
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
