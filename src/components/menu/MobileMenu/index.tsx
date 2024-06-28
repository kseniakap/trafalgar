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
      <StyledAppBar position="sticky">
        <StyleToolBar>
          <Logo width="100px" />
          <StyledStack>
            <CartIconWithBadge badgeContent={9} color="#001D6C" />
            <MenuButton onClick={toggleDrawer(true)} color="#001D6C" />
          </StyledStack>
        </StyleToolBar>
      </StyledAppBar>
      <CustomDrawer open={open} onClose={toggleDrawer(false)} />
    </>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  minWidth: '152px',
  flexDirection: 'row',
}));

const StyledAppBar = styled(AppBar)`
  background-color: ${WHITE};
  box-shadow: none;
  border-bottom: 1px solid ${COOL_GRAY_20};
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default MobileMenu;
