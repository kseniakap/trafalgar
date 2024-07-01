import { Drawer } from '@mui/material';
import { FC } from 'react';

import DrawerList from './DrawerList';

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CustomDrawer: FC<CustomDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerList closeDrawer={onClose} />
    </Drawer>
  );
};

export default CustomDrawer;
