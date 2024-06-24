import debounce from 'lodash/debounce';
import { useLayoutEffect, useState } from 'react';

const mobileSize = 768;
const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileSize);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < mobileSize);
    };
    window.addEventListener('resize', debounce(updateSize, 250));
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
