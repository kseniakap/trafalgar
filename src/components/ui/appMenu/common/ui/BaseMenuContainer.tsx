import { Box, styled } from '@mui/material';

const BaseMenuContainer = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(10),

  [theme.breakpoints.down('desktop')]: {
    paddingInline: theme.spacing(1),
  },
  [theme.breakpoints.down('iPad')]: {
    paddingInline: theme.spacing(1),
  },
}));

export default BaseMenuContainer;
