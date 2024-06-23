import styled from 'styled-components';
import AuthImg from '~/assets/images/auth.png';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

export const AuthWrapperImg: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Div>
      <Block>{children}</Block>
      <Image $breakpoint={Breakpoints.tablet} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div<{ $breakpoint: number }>`
  display: flex;
  flex: 1;
  background: url(${AuthImg}) center center / cover no-repeat;
  @media screen and (max-width: ${(props) => props.$breakpoint}px) {
    display: none;
  }
`;
