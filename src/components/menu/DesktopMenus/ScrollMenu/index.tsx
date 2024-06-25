import { Box, styled } from '@mui/material';
import { FC } from 'react';

import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';
import { WHITE } from '~/assets/style/colors';

const ScrollMenu: FC = () => {
  return (
    <StyledScrollMenuContainer>
      <TopMenu />
      <BottomMenu />
    </StyledScrollMenuContainer>
  );
};

const StyledScrollMenuContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${WHITE};
`;

export default ScrollMenu;
