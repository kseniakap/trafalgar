import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

import SearchSelect from './SearchSelect';
import SearchTextField from './SearchTextField';

interface ISearchBarProps {
  height: string;
}

const SearchBar: FC<ISearchBarProps> = ({ height }) => {
  return (
    <SearchBarContainer height={height}>
      <SearchBox>
        <SearchTextField />
        <SearchSelect />
      </SearchBox>
      <StyledButton disableElevation variant="contained">
        <Typography fontWeight={'500'} fontSize={'16px'}>
          Поиск
        </Typography>
      </StyledButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

const StyledButton = styled(Button)(() => ({
  width: '105px',
  backgroundColor: '#458FF6',
  textTransform: 'none',
}));

const SearchBarContainer = styled(Box)(({ height }: ISearchBarProps) => ({
  display: 'flex',
  gap: '24px',
  width: '100%',
  height: height,
}));

const SearchBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
}));
