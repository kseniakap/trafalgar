import { FC } from 'react';
import styled from 'styled-components';

const DefaultLayout: FC = ({ children }) => {
  return <FullHeight>{children}</FullHeight>;
};
const FullHeight = styled.div`
  min-height: 100vh;
`;

export default DefaultLayout;
