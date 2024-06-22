import menuMenu from '@/assets/icons/menuMenu.svg';
import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface NavBarProps {
  navs: string[];
}

const NavBar: FC<NavBarProps> = ({ navs }) => {
  return (
    <NavBarContainer>
      <NavButtonMenu startIcon={<img src={menuMenu} alt="Menu Icon" />}>Меню</NavButtonMenu>
      {navs.map((nav) => (
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

const NavButtonMenu = styled(NavButton)(() => ({
  backgroundColor: '#FFFFFF',
  boxSizing: 'border-box',
  border: '1px solid #C1C7CD',
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
