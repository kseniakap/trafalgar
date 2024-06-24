import cartIcon from '@/assets/icons/menuCart.svg';
import { Badge, IconButton, ImageListItem } from '@mui/material';
import { FC } from 'react';

interface ICartIconWithBadge {
  badgeContent: number;
}

const CartIconWithBadge: FC<ICartIconWithBadge> = ({ badgeContent }) => {
  return (
    <IconButton>
      <Badge badgeContent={badgeContent} color="error">
        <ImageListItem>
          <img src={cartIcon} alt="Cart Icon" style = {{width: 'auto', height: 'auto'}}/>
        </ImageListItem>
      </Badge>
    </IconButton>
  );
};

export default CartIconWithBadge;
