import Select from '@/components/ui/Select';
import { Box, Button, MenuItem, styled, Typography } from '@mui/material';
import { FC } from 'react';

import { Categories } from '../../lib/Categories';
import SearchTextField from './SearchTextField';

interface ISearchBarProps {
  height: string;
}

const SearchBar: FC<ISearchBarProps> = ({ height }) => {
  return (
    <SearchBarContainer height={height}>
      <SearchBox>
        <SearchTextField />
        <StyledSelect placeholder="Все категории">
          {Categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Typography fontWeight={'500'} fontSize={'16px'}>
                {category}
              </Typography>
            </MenuItem>
          ))}
        </StyledSelect>
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

const StyledSelect = styled(Select)`
  width: 180px;
`;

const StyledButton = styled(Button)`
  width: 105px;
  background-color: #458ff6;
  text-transform: none;
`;

const SearchBarContainer = styled(Box)(({ height }: ISearchBarProps) => ({
  display: 'flex',
  gap: '24px',
  width: '100%',
  height: height,
}));

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
