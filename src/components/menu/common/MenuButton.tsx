import { ReactComponent as MenuMenu } from '@/assets/icons/menuMenu.svg';
import { Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

import { COOL_GRAY_30, WHITE } from '~/assets/style/colors';

interface IMenuButtonProps {
  onClick?: () => void;
  color?: string;
}

const MenuButton: FC<IMenuButtonProps> = ({ onClick, color = 'black' }) => {
  return (
    <NavButtonMenu onClick={onClick} startIcon={<StyledMenuIcon color={color} />}>
      <Typography color={color} fontWeight={'500'} fontSize={'16px'}>
        Меню
      </Typography>
    </NavButtonMenu>
  );
};

const StyledMenuIcon = styled(MenuMenu)<{ color: string }>`
  path {
    fill: ${(props) => props.color};
  }
`;

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

export default MenuButton;
