import menuMenu from '@/assets/icons/menuMenu.svg';
import { Button, ImageListItem, styled, Typography } from '@mui/material';
import { FC } from 'react';

import { COOL_GRAY_30, WHITE } from '~/assets/style/colors';

interface IMenuButtonProps {
  onClick?: () => void;
}

const MenuButton: FC<IMenuButtonProps> = ({ onClick }) => {
  return (
    <NavButtonMenu
      onClick={onClick}
      startIcon={
        <ImageListItem>
          <img src={menuMenu} alt="Menu Icon" />
        </ImageListItem>
      }
    >
      <Typography fontWeight={'500'} fontSize={'16px'}>
        Меню
      </Typography>
    </NavButtonMenu>
  );
};

export default MenuButton;

const NavButtonMenu = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'none',
  padding: '4px 16px 4px 16px',
  backgroundColor: WHITE,

  minWidth: '108px',
  [theme.breakpoints.up('desktop')]: {
    border: `1px solid ${COOL_GRAY_30}`,
  },
}));
