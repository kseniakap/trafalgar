import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';

import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';

const MiddleMenu: FC = () => {
  return (
    <MiddleMenuContainer>
      <Logo />
      <SearchBar height="48px" />
    </MiddleMenuContainer>
  );
};

const MiddleMenuContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '96px',
  boxSizing: 'border-box',
  padding: '0 80px',
  gap: '24px',
}));

export default MiddleMenu;
