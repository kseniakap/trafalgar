import { styled } from '@mui/material';
import { FC } from 'react';

import Location from '../../common/Location';
import UserAndCartMenus from '../../common/UserAndCartMenus';
import BaseMenuContainer from '../../common/ui/BaseMenuContainer';
import { COOL_GRAY_30, WHITE } from '~/assets/style/colors';

const TopMenu: FC = () => {
  return (
    <TopMenuContainer>
      <Location location="Москва" />
      <UserAndCartMenus />
    </TopMenuContainer>
  );
};

const TopMenuContainer = styled(BaseMenuContainer)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderBottom: `1px solid ${COOL_GRAY_30}`,

  backgroundColor: WHITE,

  height: '64px',
}));

export default TopMenu;
