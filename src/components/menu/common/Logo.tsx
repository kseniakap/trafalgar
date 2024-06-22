import logo from '@/assets/icons/trafalgarLogo.svg';
import { FC } from 'react';

const Logo: FC = () => {
  return <img src={logo} alt="Logo" style={{ height: '100%', width: '170px' }} />;
};

export default Logo;
