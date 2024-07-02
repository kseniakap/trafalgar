import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import MenuButton from './MenuButton';
import { navigationLinks } from '~/const/navigationLinks';

const NavBar: FC = () => {
  const handleScroll = (el: HTMLElement) => {
    const yOffset = -128;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <NavBarContainer>
      <MenuButton />
      <NavButtonsContainer>
        {Object.entries(navigationLinks).map(([, value]) => (
          <NavHashLink key={value.id} to={`#${value.id}`} scroll={handleScroll}>
            <NavButton>
              <Typography fontWeight={'500'} fontSize={'16px'}>
                {value.title}
              </Typography>
            </NavButton>
          </NavHashLink>
        ))}
      </NavButtonsContainer>
    </NavBarContainer>
  );
};

const NavButton = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('desktopXL')]: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  },
  [theme.breakpoints.down('desktop')]: {
    padding: '0px ',
  },
}));

const NavBarContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  height: 48px;
  padding: 8px 0px 8px 0px;
`;

const NavButtonsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('desktop')]: {
    gap: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

export default NavBar;
