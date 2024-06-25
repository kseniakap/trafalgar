import { styled, Container, useMediaQuery, useTheme } from '@mui/material';
import { FC, useState } from 'react';

import envelopeIcon from '~/assets/icons/envelope.svg';
import facebookIcon from '~/assets/icons/facebook.svg';
import instagramIcon from '~/assets/icons/instagram.svg';
import linkedinIcon from '~/assets/icons/linkedin.svg';
import twitterIcon from '~/assets/icons/twitter.svg';
import youtubeIcon from '~/assets/icons/youtube.svg';
import appStoreBage from '~/assets/img/bage/appStore-bage.png';
import googlePlayBage from '~/assets/img/bage/googlePlay-bage.png';
import logoImg from '~/assets/img/logo/trafalgar.png';
import { Button, ButtonStyle } from '~/components/ui/Button/Button';
import { Input } from '~/components/ui/Input/Input';

const FooterBlock: FC = () => {
  const { breakpoints } = useTheme();
  const [emailState, setEmailState] = useState<string>('');

  const iPadMatch = useMediaQuery(breakpoints.down('iPad'));

  return (
    <Block>
      <Content maxWidth="desktop">
        <Top>
          <img src={logoImg} alt="Trafalgar" />
          <form>
            <EmailInput
              leftIcon={<img src={envelopeIcon} alt="Иконка конверта" />}
              placeholder={iPadMatch ? 'Подписаться' : 'Подписаться на рассылку'}
              value={emailState}
              onChange={(value) => setEmailState(value)}
            />
            <Button text="Подписаться" style={ButtonStyle.Contained} onClick={() => setEmailState('')} />
          </form>
        </Top>
        <Center>
          <Column>
            <h3 className="heading-6">Для взрослых</h3>
            <ul>
              <li>
                <a href="#">Кардиология</a>
              </li>
              <li>
                <a href="#">Терапия</a>
              </li>
              <li>
                <a href="#">Флебология</a>
              </li>
              <li>
                <a href="#">Травмы</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3 className="heading-6">Для детей</h3>
            <ul>
              <li>
                <a href="#">Педиатрия</a>
              </li>
              <li>
                <a href="#">Инфекции</a>
              </li>
              <li>
                <a href="#">Неврология</a>
              </li>
              <li>
                <a href="#">Фтизиатрия</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3 className="heading-6">Новости</h3>
            <ul>
              <li>
                <a href="#">Новости здравоохранения</a>
              </li>
              <li>
                <a href="#">Открытия</a>
              </li>
              <li>
                <a href="#">Документы</a>
              </li>
              <li>
                <a href="#">Справочники</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3 className="heading-6">Контакты</h3>
            <Column>
              <LinkBages>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                  <img src={appStoreBage} alt="AppStore" />
                </a>
                <a href="https://play.google.com/" target="_blank" rel="noreferrer">
                  <img src={googlePlayBage} alt="GooglePlay" />
                </a>
              </LinkBages>
              <SocialLinks>
                <h4 className="heading-6">Присоединиться к нам</h4>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                      <img src={youtubeIcon} alt="YouTube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <img src={facebookIcon} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                      <img src={twitterIcon} alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <img src={instagramIcon} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <img src={linkedinIcon} alt="Linkedin" />
                    </a>
                  </li>
                </ul>
              </SocialLinks>
            </Column>
          </Column>
        </Center>
        <Bottom>
          <span className="body-s">Тестовая компания @ 2023. Все права защищены.</span>
          <ul>
            <li>
              <a href="#" className="btn-text-m">
                Медицина
              </a>
            </li>
            <li>
              <a href="#" className="btn-text-m">
                Наука
              </a>
            </li>
            <li>
              <a href="#" className="btn-text-m">
                Инновации
              </a>
            </li>
          </ul>
        </Bottom>
      </Content>
    </Block>
  );
};

const Block = styled('div')(({ theme }) => ({
  background: 'linear-gradient(180deg, rgb(103, 195, 243), rgb(90, 152, 242) 100%)',
  color: theme.palette.common.white,

  a: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },

  ul: {
    listStyle: 'none',
  },
}));

const Content = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 10),
  height: '100%',
  display: 'grid',
  gridTemplateRows: '48px 1fr 40px',
  rowGap: theme.spacing(6),

  [theme.breakpoints.down('iPad')]: {
    padding: theme.spacing(6, 2),
    gridTemplateRows: '135px 1fr 81px',
  },
}));

const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    height: '41px',
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('iPad')]: {
    flexDirection: 'column',
    gap: '48px',
  },
}));

const EmailInput = styled(Input)(({ theme }) => ({
  'width': '261px',
  'img': {
    width: '24px',
    height: '24px',
  },

  '& .MuiFormControl-root': {
    marginTop: '0 !important',
  },

  [theme.breakpoints.down('iPad')]: {
    width: '100%',
  },

  [theme.breakpoints.down(390)]: {
    '& ::placeholder': { fontSize: '14px !important' },
  },
}));

const Center = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: theme.spacing(6),
  padding: theme.spacing(6),
  borderWidth: '1px 0px 1px',
  borderStyle: 'solid',
  borderColor: theme.palette.coolGray['coolGray-30'],

  [theme.breakpoints.down('iPad')]: {
    gridTemplateColumns: '1fr',
    padding: theme.spacing(4, 0),
  },
}));

const Column = styled('div')(({ theme }) => ({
  '& > h3': {
    paddingBottom: theme.spacing(3.5),
  },

  '& > ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('iPad')]: {
    'textAlign': 'center',

    'h3, h4': {
      textAlign: 'center',
    },

    '& > ul': {
      paddingBottom: theme.spacing(6),
    },
  },
}));

const LinkBages = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  [theme.breakpoints.down('iPad')]: {
    justifyContent: 'center',
  },
}));

const SocialLinks = styled('div')(({ theme }) => ({
  'paddingTop': theme.spacing(4),

  '& > ul': {
    paddingTop: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
  },

  [theme.breakpoints.down('iPad')]: {
    '& > ul': {
      justifyContent: 'center',
    },
  },
}));

const Bottom = styled('div')(({ theme }) => ({
  'display': 'flex',
  'justifyContent': 'space-between',

  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down('iPad')]: {
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'flex-start',
    'gap': theme.spacing(4),
    '& > span': {
      fontSize: '12px !important',
    },
  },
}));

export default FooterBlock;
