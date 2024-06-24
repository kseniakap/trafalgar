import cartIcon from '@/assets/icons/menuCart.svg';
import { Badge, IconButton } from '@mui/material';
import Image from 'mui-image';
import { FC } from 'react';

interface ICartIconWithBadge {
  badgeContent: number;
}

const CartIconWithBadge: FC<ICartIconWithBadge> = ({ badgeContent }) => {
  return (
    <IconButton>
      <Badge badgeContent={badgeContent} color="error">
        <Image src={cartIcon} alt="Cart Icon" width='16px' height='16px' />
      </Badge>
    </IconButton>
  );
};

export default CartIconWithBadge;
