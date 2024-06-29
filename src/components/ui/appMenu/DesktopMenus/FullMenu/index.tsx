import { FC } from 'react';

import BottomMenu from './BottomMenu';
import MiddleMenu from './MiddleMenu';
import TopMenu from './TopMenu';

const FullMenu: FC = () => {
  return (
    <>
      <TopMenu />
      <MiddleMenu />
      <BottomMenu />
    </>
  );
};

export default FullMenu;
