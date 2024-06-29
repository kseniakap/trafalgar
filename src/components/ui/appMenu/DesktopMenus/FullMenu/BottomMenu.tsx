import { styled } from '@mui/system';
import { FC } from 'react';

import NavBar from '../../common/NavBar';
import BaseMenuContainer from '../../common/ui/BaseMenuContainer';
import { COOL_GRAY_10 } from '~/assets/style/colors';

const BottomMenu: FC = () => {
  return (
    <BottomMenuContainer>
      <NavBar />
    </BottomMenuContainer>
  );
};

const BottomMenuContainer = styled(BaseMenuContainer)`
  display: flex;
  gap: 8px;
  background-color: ${COOL_GRAY_10};
  height: 48px;
`;

export default BottomMenu;
