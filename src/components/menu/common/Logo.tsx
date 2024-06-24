import logo from '@/assets/icons/trafalgarLogo.svg';
import Image from 'mui-image';
import { FC } from 'react';

interface ILogoProps {
  width?: string;
}

const Logo: FC<ILogoProps> = ({ width = '168px' }) => {
  return <Image src={logo} alt="logo" width={width} />;
};

export default Logo;
