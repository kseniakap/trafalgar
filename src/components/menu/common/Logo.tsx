import logo from '@/assets/icons/trafalgarLogo.svg';
import { ImageListItem } from '@mui/material';
import { FC } from 'react';

interface ILogoProps {
  width?: string;
}

const Logo: FC<ILogoProps> = ({ width = '168px' }) => {
  return (
    <ImageListItem>
      <img src={logo} alt="logo" style={{ width: width }} />
    </ImageListItem>
  );
};

export default Logo;
