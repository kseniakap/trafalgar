import styled from 'styled-components';
import AuthImg from '~/assets/images/auth.png';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

export const AuthWrapperImg: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Div breakpoint={Breakpoints.tablet}>
      <Block breakpoint={Breakpoints.tablet}>{children}</Block>
      <Image breakpoint={Breakpoints.tablet} />
    </Div>
  );
};

const Div = styled.div<{ breakpoint: number }>`
  display: flex;
  min-height: 100vh;
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    flex-direction: column;
  }
`;

const Block = styled.div<{ breakpoint: number }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    align-items: start;
    order: 2;
  }
`;
const Image = styled.div<{ breakpoint: number }>`
  display: flex;
  flex: 1;
  background: url(${AuthImg}) center center / cover no-repeat;
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    flex: none;
    height: 280px;
    order: 1;
  }
`;
