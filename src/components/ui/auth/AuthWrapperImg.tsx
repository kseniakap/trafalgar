import { styled } from '@mui/material';
import AuthImg from '~/assets/images/auth.png';

export const AuthWrapperImg: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Div>
      <Block>{children}</Block>
      <Image />
    </Div>
  );
};

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
  },
}));

const Block = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1',
  [theme.breakpoints.down('tablet')]: {
    alignItems: 'start',
    order: '2',
  },
}));

const Image = styled('div')(({ theme }) => ({
  display: 'flex',
  background: `url(${AuthImg}) center center / cover no-repeat`,
  flex: '1',
  [theme.breakpoints.down('tablet')]: {
    flex: 'none',
    height: '280px',
    order: '1',
  },
}));
