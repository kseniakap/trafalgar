import { Box } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import FullMenu from './FullMenu';
import ScrollMenu from './ScrollMenu';
import { COOL_GRAY_10 } from '~/assets/style/colors';

const DesktopMenus: FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <Top ref={ref} />
      <MenuContainer>{isIntersecting ? <FullMenu /> : <ScrollMenu />}</MenuContainer>
      <Spacer />
    </>
  );
};

const Spacer = styled(Box)`
  flex-grow: 1;
  background-color: ${COOL_GRAY_10};
  height: 208px;
`;

const Top = styled(Box)`
  position: absolute;
  top: 0;
  height: 80px;
`;

const MenuContainer = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export default DesktopMenus;
