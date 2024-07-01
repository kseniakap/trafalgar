import cartIcon from '@/assets/icons/menuCart.svg';
import humanIcon from '@/assets/icons/menuHuman.svg';
import { Box, styled } from '@mui/material';
import { FC } from 'react';

import CustomMenu from '~/components/ui/Menu';
import { Routes } from '~/lib/routes';

const ProfileMenuItems = [
  { link: Routes.LOGIN, title: 'Вход' },
  { link: Routes.REGISTER, title: 'Регистрация' },
];

const UserAndCartMenus: FC = () => {
  return (
    <UserAndCartMenusContainer>
      <CustomMenu startIcon={humanIcon} title="Профиль" items={ProfileMenuItems} />
      <CustomMenu startIcon={cartIcon} title="Корзина" disabled={true} />
    </UserAndCartMenusContainer>
  );
};

const UserAndCartMenusContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default UserAndCartMenus;
