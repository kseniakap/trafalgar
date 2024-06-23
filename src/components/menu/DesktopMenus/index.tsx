import { FC, useEffect, useState } from 'react';

import FullMenu from './FullMenu';
import ScrollMenu from './ScrollMenu';

const DesktopMenus: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <>{isScrolled ? <ScrollMenu /> : <FullMenu />};</>;
};

export default DesktopMenus;
