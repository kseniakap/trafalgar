import { useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

import DesktopMenus from './DesktopMenus';
import MobileMenu from './MobileMenu';

const AppMenu: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('iPad'));

  return <>{isMobile ? <MobileMenu /> : <DesktopMenus />}</>;
};

export default AppMenu;
