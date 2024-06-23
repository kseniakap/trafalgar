import { styled } from '@mui/material';
import { FC } from 'react';

import Logo from '../../common/Logo';
import NavBar from '../../common/NavBar';
import BaseMenuContainer from '../../common/ui/BaseMenuContainer';
import { COOL_GRAY_20 } from '~/assets/style/colors';

const MiddleMenu: FC = () => {
  return (
    <StyledBottomMenuContainer>
      <Logo />
      <NavBar />
    </StyledBottomMenuContainer>
  );
};

const StyledBottomMenuContainer = styled(BaseMenuContainer)(() => ({
  display: 'flex',
  height: '64px',

  paddingTop: '8px',
  paddingBottom: '8px',
  gap: '16px',
  borderBottom: `1px solid ${COOL_GRAY_20}`,
}));
export default MiddleMenu;
