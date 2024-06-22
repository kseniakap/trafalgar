import { Box, styled } from '@mui/material';
import { FC } from 'react';

import Location from '../common/Location';
import UserAndCartMenus from '../common/UserAndCartMenus';
import { COOL_GRAY_30, WHITE } from '~/assets/style/colors';

const TopMenu: FC = () => {
  return (
    <TopMenuContainer>
      <Location location="Москва" />
      <UserAndCartMenus />
    </TopMenuContainer>
  );
};

const TopMenuContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  boxSizing: 'border-box',
  borderBottom: `1px solid ${COOL_GRAY_30}`,

  backgroundColor: WHITE,

  height: '64px',

  padding: '8px 80px 8px 80px',
}));

export default TopMenu;
