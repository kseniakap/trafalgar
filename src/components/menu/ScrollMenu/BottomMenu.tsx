import { Box } from '@mui/material';
import { FC } from 'react';

import Logo from '../common/Logo';
import NavBar from '../common/NavBar';

const navs = ['Главная', 'О проекте', 'Статьи', 'Отзывы', 'Знания', 'Вопросы', 'Цены', 'Оставить заявку', 'Спонсоры'];

const MiddleMenu: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '64px',
        boxSizing: 'border-box',
        padding: '8px 80px 8px 80px',
        gap: '16px',
        borderBottom: '1px solid #DDE1E6',
      }}
    >
      <Logo />
      <NavBar navs={navs} />
    </Box>
  );
};

export default MiddleMenu;
