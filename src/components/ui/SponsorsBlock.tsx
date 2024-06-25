import { Container, styled } from '@mui/material';
import { FC } from 'react';

import artVenueLogo from '~/assets/img/logo/artvenue-white.png';
import kontrastrLogo from '~/assets/img/logo/kontrastr-white.png';
import shellsLogo from '~/assets/img/logo/shells-white.png';
import smartFinderLogo from '~/assets/img/logo/smartFinder-white.png';
import wavesMarathonLogo from '~/assets/img/logo/wavesmarathon-white.png';
import zoomerrLogo from '~/assets/img/logo/zoomerr-white.png';

const SponsorsBlock: FC = () => {
  return (
    <>
      <Block>
        <Content maxWidth="desktop">
          <SponsorList>
            <li>
              <img src={shellsLogo} alt="Shells" />
            </li>
            <li>
              <img src={smartFinderLogo} alt="SmartFinder" />
            </li>
            <li>
              <img src={zoomerrLogo} alt="Zoomerr" />
            </li>
            <li>
              <img src={artVenueLogo} alt="ArtVenue" />
            </li>
            <li>
              <img src={kontrastrLogo} alt="Kontrastr" />
            </li>
            <li>
              <img src={wavesMarathonLogo} alt="WavesMarathon" />
            </li>
          </SponsorList>
        </Content>
      </Block>
    </>
  );
};

const Block = styled('div')(() => ({
  background: 'linear-gradient(180.00deg, rgb(103, 195, 243),rgb(90, 152, 242) 100%)',
}));

const Content = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10),
  height: '192px',

  [theme.breakpoints.down('desktop')]: {
    padding: theme.spacing(6, 2),
  },

  [theme.breakpoints.down('iPad')]: {
    height: '240px',
  },
}));

const SponsorList = styled('ul')(({ theme }) => ({
  'height': '100%',
  'listStyle': 'none',
  'display': 'flex',
  'justifyContent': 'space-between',
  'alignItems': 'center',

  '& > li': {
    width: '200px',
    height: '32px',
    textAlign: 'center',
  },

  [theme.breakpoints.down('iPad')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    justifyContent: 'center',
    rowGap: theme.spacing(3),
  },

  [theme.breakpoints.down('tablet')]: {
    'gridTemplateColumns': 'repeat(2, 1fr)',
    '& > li': {
      width: 'auto',
    },
  },
}));

export default SponsorsBlock;
