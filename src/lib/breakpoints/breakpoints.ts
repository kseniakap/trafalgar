import { Breakpoint } from '@mui/material';

export type BreakpointsType = {
  [key in Breakpoint]: number;
};

export const Breakpoints: BreakpointsType = {
  mobile: 360,
  tablet: 768,
  iPad: 1024,
  desktop: 1440,
  desktopL: 1920,
  desktopXL: 3240,
} as const;
