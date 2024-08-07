import { Box, Button, Divider, List, ListItem, Stack, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import Logo from '../../common/Logo';
import SearchTextField from '../../common/SearchBar/SearchTextField';
import { COOL_GRAY_10, COOL_GRAY_20, SECONDARY_BG } from '~/assets/style/colors';
import { navigationLinks } from '~/const/navigationLinks';

interface DrawerListProps {
  closeDrawer: () => void;
}

const DrawerList: FC<DrawerListProps> = ({ closeDrawer }) => {
  const handleScroll = (el: HTMLElement) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <DrawerContainer sx={{ width: '256px' }} role="presentation">
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo width="160px" />
        </Box>
        <Box sx={{ height: '48px' }}>
          <SearchTextField variant="standard" />
        </Box>
        <List sx={{ padding: '0px' }}>
          {Object.entries(navigationLinks).map(([, value]) => (
            <StyledLink key={value.id} to={`#${value.id}`} scroll={handleScroll}>
              <StyledListItem onClick={closeDrawer}>
                <Typography color="black" fontWeight={'500'} fontSize={'16px'}>
                  {value.title}
                </Typography>
              </StyledListItem>
              <Divider />
            </StyledLink>
          ))}
        </List>
      </Stack>
      <StyledButton onClick={closeDrawer} variant="outlined">
        Закрыть меню
      </StyledButton>
    </DrawerContainer>
  );
};

export default DrawerList;

const StyledLink = styled(NavHashLink)`
  color: black;
  text-decoration: none;
  width: 100%;

  -webkit-tap-highlight-color: transparent !important;
  outline: none !important;
`;

const StyledButton = styled(Button)`
  color: ${SECONDARY_BG};
  border: 2px solid ${SECONDARY_BG};
  height: 48px;
  width: 100%;
`;

const DrawerContainer = styled(Box)`
  width: 256px;
  padding: 24px 16px;
  border-right: 1px solid ${COOL_GRAY_20};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledListItem = styled(ListItem)`
  padding: 8px;

  &:hover {
    background-color: ${COOL_GRAY_10};
  }
`;
