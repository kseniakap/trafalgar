import { Drawer } from '@mui/material';
import { FC } from 'react';

import DrawerList from './DrawerList';

interface ICustomDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CustomDrawer: FC<ICustomDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerList closeDrawer={onClose} />
    </Drawer>
  );
};

export default CustomDrawer;
