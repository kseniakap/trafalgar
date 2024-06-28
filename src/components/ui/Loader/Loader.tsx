import { Box } from '@mui/material';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Content>
        <Text component="span">T</Text>
      </Content>
    </LoaderContainer>
  );
};
const LoaderContainer = styled(Box)`
  @keyframes spinner-rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  position: absolute;
  z-index: 0;
  top: calc(50% - 18.5px);
  left: calc(50% - 28px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 37px;
  overflow: hidden;
  ::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-image: conic-gradient(
      from 225.17deg at 50% 49.61%,
      #458ff6 -150.9deg,
      rgba(69, 143, 246, 0) 64.53deg,
      #458ff6 209.1deg,
      rgba(69, 143, 246, 0) 424.53deg
    );
    animation: spinner-rotate 3s linear infinite;
  }
`;
const Content = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 30px;
  background-color: white;
`;
const Text = styled(Box)`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 700;
  line-height: 26px;
  color: #458ff6;
`;
