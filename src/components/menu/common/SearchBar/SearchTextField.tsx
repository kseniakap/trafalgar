import searchIcon from '@/assets/icons/search.svg';
import { ImageListItem, InputAdornment, styled, TextField } from '@mui/material';
import { FC } from 'react';

import { COOL_GRAY_10, COOL_GRAY_60 } from '~/assets/style/colors';

const SearchTextField: FC = () => {
  const inputProps = {
    startAdornment: (
      <InputAdornment position="start" sx={{ height: '100%' }}>
        <ImageListItem>
          <img src={searchIcon} alt="Search Icon" style={{ width: 'auto', height: 'auto' }} />
        </ImageListItem>
      </InputAdornment>
    ),
    sx: { height: '100%' },
  };

  return <StyledTextField variant="outlined" placeholder="Поиск по ..." fullWidth InputProps={inputProps} />;
};

export default SearchTextField;

const StyledTextField = styled(TextField)`
  height: 100%;
  background-color: ${COOL_GRAY_10};
  color: ${COOL_GRAY_60};
`;
