import { Box, Button, Divider, List, ListItem, Stack, styled, Typography } from '@mui/material';
import { FC, Fragment } from 'react';

import Logo from '../../common/Logo';
import SearchTextField from '../../common/SearchBar/SearchTextField';
import { navigationLinks } from '../../lib/NavigationLinks';
import { COOL_GRAY_20 } from '~/assets/style/colors';

interface IDrawerListProps {
  closeDrawer: () => void;
}

const DrawerList: FC<IDrawerListProps> = ({ closeDrawer }) => {
  return (
    <DrawerContainer role="presentation">
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo width="160px" />
        </Box>
        <Box sx={{ height: '48px' }}>
          <SearchTextField />
        </Box>
        <List sx={{ padding: '0px' }}>
          {navigationLinks.map((nav) => (
            <Fragment key={nav}>
              <ListItem onClick={closeDrawer} key={nav} sx={{ padding: '8px ' }}>
                <Typography fontWeight={'500'} fontSize={'16px'}>
                  {nav}
                </Typography>
              </ListItem>
              <Divider />
            </Fragment>
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

const StyledButton = styled(Button)(() => ({
  color: '#458FF6',
  border: '2px solid #458FF6',
  height: '48px',
  width: '100%',
}));

const DrawerContainer = styled(Box)(() => ({
  width: 256,
  padding: '24px 16px',
  borderRight: `1px solid ${COOL_GRAY_20}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
