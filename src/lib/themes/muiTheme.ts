import { createTheme } from '@mui/material';

import { Breakpoints } from '~/lib/breakpoints/breakpoints';

const muiTheme = createTheme({
  breakpoints: {
    values: {
      ...Breakpoints,
    },
  },
});

export default muiTheme;
