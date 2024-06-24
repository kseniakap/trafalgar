import { Box, styled } from '@mui/material';
import { FC } from 'react';

import CustomizedMenu from '~/components/ui/Menu';

interface IMenuItemWithIconProps {
  icon: string;
  title: string;
  items: string[];
}

const MenuItemWithIcon: FC<IMenuItemWithIconProps> = ({ icon, items, title }) => {
  return (
    <MenuItemWithIconContainer>
      <img src={icon} />
      <CustomizedMenu title={title} items={items} />
    </MenuItemWithIconContainer>
  );
};

const MenuItemWithIconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  min-width: 100px;
`;

export default MenuItemWithIcon;
