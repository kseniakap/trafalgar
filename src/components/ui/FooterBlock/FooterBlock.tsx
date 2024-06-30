import { styled, Container, useMediaQuery, useTheme } from '@mui/material';
import { FC, useState } from 'react';

import envelopeIcon from '~/assets/icons/envelope.svg';
import logoIcon from '~/assets/icons/trafalgarLogo.svg';
import appStoreBage from '~/assets/img/bage/appStore-bage.png';
import googlePlayBage from '~/assets/img/bage/googlePlay-bage.png';
import { COOL_GRAY_30, WHITE } from '~/assets/style/colors';
import { Button, ButtonStyle } from '~/components/ui/Button/Button';
import { Input } from '~/components/ui/Input/Input';
import {
  Link,
  LinkIcon,
  adultCategory,
  childCategory,
  mainCategory,
  newsCategory,
  socialCategory,
} from '~/const/footerCategories';

const FooterBlock: FC = () => {
  const { breakpoints } = useTheme();
  const [emailState, setEmailState] = useState<string>('');

  const iPadMatch = useMediaQuery(breakpoints.down('iPad'));

  const renderLinks = (links: Link[] | LinkIcon[]) => {
    return (
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a href={link.href}>{'img' in link ? <img src={link.img} alt={link.text} /> : link.text}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Block>
      <Content maxWidth="desktop">
        <Top>
          <img src={logoIcon} alt="Trafalgar" />
          <form>
            <EmailInput
              leftIcon={<img src={envelopeIcon} alt="Иконка конверта" />}
              placeholder={iPadMatch ? 'Подписаться' : 'Подписаться на рассылку'}
              value={emailState}
              onChange={(value) => setEmailState(value)}
            />
            <SubsribeBtn text="Подписаться" style={ButtonStyle.Contained} onClick={() => setEmailState('')} />
          </form>
        </Top>
        <Center>
          <Column>
            <h3 className="heading-6">Для взрослых</h3>
            {renderLinks(adultCategory)}
          </Column>
          <Column>
            <h3 className="heading-6">Для детей</h3>
            {renderLinks(childCategory)}
          </Column>
          <Column>
            <h3 className="heading-6">Новости</h3>
            {renderLinks(newsCategory)}
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
                {renderLinks(socialCategory)}
              </SocialLinks>
            </Column>
          </Column>
        </Center>
        <Bottom>
          <span className="body-s">Тестовая компания @ 2023. Все права защищены.</span>
          <div className="btn-text-m">{renderLinks(mainCategory)}</div>
        </Bottom>
      </Content>
    </Block>
  );
};

const Block = styled('div')(() => ({
  background: 'linear-gradient(180deg, rgb(103, 195, 243), rgb(90, 152, 242) 100%)',
  color: WHITE,

  a: {
    color: WHITE,
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
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('iPad')]: {
    flexDirection: 'column',
    gap: '48px',

    form: {
      gap: theme.spacing(1),
      justifyContent: 'center',
    },
  },
}));

const SubsribeBtn = styled(Button)(() => ({
  minWidth: '160px !important',
  height: '44px !important',
}));

const EmailInput = styled(Input)(({ theme }) => ({
  'maxWidth': '261px',

  '.MuiInputBase-root': {
    gap: '8px',
    padding: '0px',
  },

  '.MuiInputBase-input': {
    height: '48px',
    padding: '0px',
  },

  '.MuiFormControl-root': {
    marginTop: '0',
  },

  '& ::placeholder': {
    transform: 'translate3d(0, -2px ,0)',
  },

  'img': {
    width: '24px',
    height: '24px',
  },

  [theme.breakpoints.down('desktop')]: {
    '& ::placeholder': {
      transform: 'translate3d(0, 0 ,0)',
    },
  },
  [theme.breakpoints.down(390)]: {
    '& ::placeholder': {
      fontSize: '14px !important',
    },
  },
}));

const Center = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: theme.spacing(6),
  padding: theme.spacing(6),
  borderWidth: '1px 0px 1px',
  borderStyle: 'solid',
  borderColor: COOL_GRAY_30,

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

  '& > div > ul': {
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
