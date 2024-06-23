import cartIcon from '@/assets/icons/menuCart.svg';
import humanIcon from '@/assets/icons/menuHuman.svg';
import { Box, styled } from '@mui/material';
import { FC } from 'react';

import MenuItemWithIcon from './MenuItemWithIcon';

const UserAndCartMenus: FC = () => {
  return (
    <UserAndCartMenusContainer>
      <MenuItemWithIcon icon={humanIcon} title="Профиль" items={['профиль', 'выйти']} />
      <MenuItemWithIcon icon={cartIcon} title="Корзина" items={['корзина']} />
    </UserAndCartMenusContainer>
  );
};

const UserAndCartMenusContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export default UserAndCartMenus;
