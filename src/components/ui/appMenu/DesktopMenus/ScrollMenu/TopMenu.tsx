import { styled } from '@mui/material';
import { FC } from 'react';

import Location from '../../common/Location';
import SearchBar from '../../common/SearchBar';
import UserAndCartMenus from '../../common/UserAndCartMenus';
import BaseMenuContainer from '../../common/ui/BaseMenuContainer';
import { COOL_GRAY_30 } from '~/assets/style/colors';

const TopMenu: FC = () => {
  return (
    <TopMenuContainer>
      <Location location="Москва" />
      <SearchBar height="32px" />
      <UserAndCartMenus />
    </TopMenuContainer>
  );
};

export default TopMenu;

const TopMenuContainer = styled(BaseMenuContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(9),

  [theme.breakpoints.down('desktop')]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down('iPad')]: {
    gap: theme.spacing(1),
  },
  alignItems: 'center',

  borderBottom: `1px solid ${COOL_GRAY_30}`,
  height: '64px',
}));
