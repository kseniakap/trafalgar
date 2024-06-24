import logo from '@/assets/icons/trafalgarLogo.svg';
import { FC } from 'react';

interface ILogoProps {
  width?: string;
}

const Logo: FC<ILogoProps> = ({ width = '168px' }) => {
  return <img src={logo} alt="logo" style={{ width }} />;
};

export default Logo;
