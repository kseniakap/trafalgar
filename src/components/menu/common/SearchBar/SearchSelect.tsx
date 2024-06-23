import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select, SelectChangeEvent, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { Categories } from '../../lib/Categories';

const SearchSelect: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setCurrentCategory(event.target.value as string);
  };

  return (
    <StyledSelect
      value={currentCategory}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem value="">Все категории</MenuItem>
      {Categories.map((category) => (
        <MenuItem key={category} value={category}>
          <Typography fontWeight={'500'} fontSize={'16px'}>
            {category}
          </Typography>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled(Select)(() => ({
  'backgroundColor': '#F2F4F8',
  'minWidth': 180,
  'height': '100%',
  'borderRadius': '0px',
  'color': '#697077',
  '& .MuiSelect-icon': {
    right: '15px',
    fontSize: '30px',
  },
}));

export default SearchSelect;
