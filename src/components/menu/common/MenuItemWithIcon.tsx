import { Box, ImageListItem, styled } from '@mui/material';
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
      <ImageListItem sx = {{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <img src={icon} style = {{width: 'auto', height: 'auto'}} />
      </ImageListItem>
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
