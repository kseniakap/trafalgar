import { Box } from '@mui/material';
import { FC } from 'react';

import Location from '../common/Location';
import SearchBar from '../common/SearchBar';
import UserAndCartMenus from '../common/UserAndCartMenus';

const TopMenu: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '72px',
        alignItems: 'center',
        boxSizing: 'border-box',
        borderBottom: '1px solid #C1C7CD',
        height: '64px',
        padding: '8px 80px 8px 80px',
      }}
    >
      <Location location="Москва" />
      <SearchBar height="32px" />
      <UserAndCartMenus />
    </Box>
  );
};

export default TopMenu;
