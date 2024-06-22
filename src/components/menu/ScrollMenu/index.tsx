import { Box } from '@mui/material';
import { FC } from 'react';

import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

const ScrollMenu: FC = () => {
  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'white' }}>
      <TopMenu />
      <BottomMenu />
    </Box>
  );
};

export default ScrollMenu;
