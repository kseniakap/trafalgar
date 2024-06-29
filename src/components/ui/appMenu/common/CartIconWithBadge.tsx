import { ReactComponent as cartIcon } from '@/assets/icons/menuCart.svg';
import { Badge, IconButton, ImageListItem, styled } from '@mui/material';
import { FC } from 'react';

interface ICartIconWithBadge {
  badgeContent: number;
  color?: string;
}

const CartIconWithBadge: FC<ICartIconWithBadge> = ({ badgeContent, color = 'black' }) => {
  return (
    <IconButton>
      <Badge badgeContent={badgeContent} color="error">
        <ImageListItem>
          <StyledCartIcon color={color} />
        </ImageListItem>
      </Badge>
    </IconButton>
  );
};

export default CartIconWithBadge;

const StyledCartIcon = styled(cartIcon)<{ color: string }>`
  path {
    fill: ${(props) => props.color};
  }
`;
