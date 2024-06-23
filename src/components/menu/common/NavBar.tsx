import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

import { navigationLinks } from '../lib/NavigationLinks';
import MenuButton from './MenuButton';

const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <MenuButton />
      {navigationLinks.map((nav) => (
        <NavButton key={nav}>
          <Typography fontWeight={'500'} fontSize={'16px'}>
            {nav}
          </Typography>
        </NavButton>
      ))}
    </NavBarContainer>
  );
};

const NavButton = styled(Button)(() => ({
  color: 'black',
  textTransform: 'none',
  padding: '4px 16px 4px 16px',
}));

const NavBarContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  gap: '8px',
  width: '100%',
  height: '48px',
  padding: '8px 0px 8px 0px',
  boxSizing: 'border-box',
}));

export default NavBar;
