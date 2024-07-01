import logo from '@/assets/icons/trafalgarLogo.svg';
import { ImageListItem } from '@mui/material';
import { FC } from 'react';

interface LogoProps {
  width?: string;
}

const Logo: FC<LogoProps> = ({ width = '168px' }) => {
  return (
    <ImageListItem sx={{ width: width }}>
      <img src={logo} alt="logo" style={{ width: width, height: 'auto' }} />
    </ImageListItem>
  );
};

export default Logo;
