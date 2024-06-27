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
    padding: '0px',
  },
}));

const NavBarContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 8px 0px 8px 0px;
`;

const NavButtonsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('desktop')]: {
    gap: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

export default NavBar;
