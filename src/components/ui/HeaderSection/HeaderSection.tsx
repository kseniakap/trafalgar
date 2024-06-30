import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import Illustration from '../../../assets/img/header-illustration.png';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import { COOL_GRAY_10 } from '~/assets/style/colors';
import muiTheme from '~/lib/themes/muiTheme';

export const HeaderSection = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Title>
          <TitleText>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</TitleText>
          <Description>
            Мы еще очень молоды, но достаточно амбициозны и планируем каждого случайного гостя нашего сайта превратить в
            его постоянного пользователя.
          </Description>
        </Title>
        <Buttons>
          <Button
            text="Войти как врач"
            style={ButtonStyle.Contained}
            size={muiTheme.breakpoints.down('tablet') ? ButtonSize.Small : ButtonSize.Large}
            textSize={muiTheme.breakpoints.down('tablet') ? ButtonTextSize.Small : ButtonTextSize.Large}
          />
          <Button
            text="Подробнее"
            style={ButtonStyle.Outlined}
            size={muiTheme.breakpoints.down('tablet') ? ButtonSize.Small : ButtonSize.Large}
            textSize={muiTheme.breakpoints.down('tablet') ? ButtonTextSize.Small : ButtonTextSize.Large}
          />
        </Buttons>
      </LeftContainer>
      <RightContainer>
        <Image src={Illustration} alt={'header illustration'} />
      </RightContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(10),
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(10),
  background: `${COOL_GRAY_10}`,
  alignItems: 'center',
  [theme.breakpoints.up('desktop')]: {
    justifyContent: 'space-evenly;',
  },
  [theme.breakpoints.down('iPad')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    padding: '48px 16px 24px 16px',
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  maxWidth: 'max(41.6vw, 600px)',
  padding: '80px 0',

  [theme.breakpoints.down('iPad')]: {
    gap: theme.spacing(6),
    padding: '0',
  },
}));

const Title = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.down('tablet')]: {
    gap: theme.spacing(3),
  },
}));

const Buttons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
}));

const RightContainer = styled(Box)(({ theme }) => ({
  dalignContent: 'center',
  maxWidth: '600px',
  paddingRight: '14px',
  [theme.breakpoints.up('desktop')]: {
    maxWidth: 'none',
  },
  [theme.breakpoints.down('iPad')]: {
    paddingRight: '0',
  },
  [theme.breakpoints.down('tablet')]: {
    paddingTop: '20px',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('iPad')]: {
    maxWidth: '360px',
  },
}));

const TitleText = styled('span')(({ theme }) => ({
  fontSize: 'min(3.75vw, 54px)',
  lineHeight: 'min(4.1vw, 59.4px)',
  fontWeight: '700',
  textAlign: 'left',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    lineHeight: '26.4px',
  },
}));

const Description = styled('span')(({ theme }) => ({
  fontSize: 'max(1.25vw, 18px)',
  lineHeight: 'max(1.75vw, 25.2px)',
  fontWeight: '400',
  textAlign: 'left',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '16px',
    lineHeight: '22.4px',
  },
}));
