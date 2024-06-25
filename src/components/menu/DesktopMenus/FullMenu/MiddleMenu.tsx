import { styled } from '@mui/system';
import { FC } from 'react';

import Logo from '../../common/Logo';
import SearchBar from '../../common/SearchBar';
import BaseMenuContainer from '../../common/ui/BaseMenuContainer';

const MiddleMenu: FC = () => {
  return (
    <MiddleMenuContainer>
      <Logo />
      <SearchBar height="48px" />
    </MiddleMenuContainer>
  );
};

const MiddleMenuContainer = styled(BaseMenuContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;

  gap: 24px;
`;

export default MiddleMenu;
