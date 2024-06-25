import { Container, styled } from '@mui/material';
import { FC } from 'react';

import { sponsors } from './sponsors';

const SponsorsBlock: FC = () => {
  const renderSponsors = () => {
    return (
      <SponsorList>
        {sponsors.map((sponsor, idx) => (
          <li key={idx}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </li>
        ))}
      </SponsorList>
    );
  };

  return (
    <>
      <Block>
        <Content maxWidth="desktop">{renderSponsors()}</Content>
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
