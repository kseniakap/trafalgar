import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';

import NavBar from '../common/NavBar';

const navs = ['Главная', 'О проекте', 'Статьи', 'Отзывы', 'Знания', 'Вопросы', 'Цены', 'Оставить заявку', 'Спонсоры'];

const BottomMenu: FC = () => {
  return (
    <BottomMenuContainer>
      <NavBar navs={navs} />
    </BottomMenuContainer>
  );
};

const BottomMenuContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  boxSizing: 'border-box',
  backgroundColor: '#F2F4F8',
  height: '48px',
  padding: '0px 80px 0px 80px',
}));

export default BottomMenu;
