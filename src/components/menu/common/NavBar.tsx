import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

import { navigationLinks } from '../lib/NavigationLinks';
import MenuButton from './MenuButton';

const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <MenuButton />
      <NavButtonsContainer>
        {navigationLinks.map((nav) => (
          <NavButton key={nav}>
            <Typography fontWeight={'500'} fontSize={'16px'}>
              {nav}
            </Typography>
          </NavButton>
        ))}
      </NavButtonsContainer>
    </NavBarContainer>
  );
};

const NavButton = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('desktopXL')]: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  },
  [theme.breakpoints.down('desktop')]: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  },
  [theme.breakpoints.down('iPad')]: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  },
}));

const NavBarContainer = styled(Box)(({ theme }) => ({
  'display': 'flex',
  'justifyContent': 'start',
  'alignItems': 'center',
  'width': '100%',
  'height': '48px',
  'padding': '8px 0px 8px 0px',
  'overflowInline': 'auto',

  'scrollbarWidth': 'none',
  'msOverflowStyle': 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.down('desktop')]: {
    overflowX: 'auto',
  },
}));

const NavButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('desktopXL')]: {
    gap: '8px',
  },
  [theme.breakpoints.down('desktop')]: {
    gap: '8px',
  },
}));

export default NavBar;
