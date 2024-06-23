import { AppBar, Stack, styled, Toolbar } from '@mui/material';
import { FC, useState } from 'react';

import CartIconWithBadge from '../common/CartIconWithBadge';
import Logo from '../common/Logo';
import MenuButton from '../common/MenuButton';
import CustomDrawer from './Drawer';
import { COOL_GRAY_20, WHITE } from '~/assets/style/colors';

const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <StyledAppBar>
        <StyleToolBar>
          <Logo width="100px" />
          <Stack spacing="1" direction="row" minWidth="152px" useFlexGap gap="8px">
            <CartIconWithBadge badgeContent={9} />
            <MenuButton onClick={toggleDrawer(true)} />
          </Stack>
        </StyleToolBar>
      </StyledAppBar>
      <CustomDrawer open={open} onClose={toggleDrawer(false)} />
    </>
  );
};

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: WHITE,
  boxShadow: 'none',
  borderBottom: `1px solid ${COOL_GRAY_20}`,
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyleToolBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

export default MobileMenu;
