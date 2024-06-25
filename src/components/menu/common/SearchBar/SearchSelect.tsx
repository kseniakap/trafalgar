import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select, SelectChangeEvent, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { Categories } from '../../lib/Categories';
import { COOL_GRAY_10, COOL_GRAY_30, COOL_GRAY_60 } from '~/assets/style/colors';

const SearchSelect: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setCurrentCategory(event.target.value as string);
  };

  return (
    <StyledSelect value={currentCategory} onChange={handleChange} displayEmpty IconComponent={KeyboardArrowDownIcon}>
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

const StyledSelect = styled(Select)`
  border-color: ${COOL_GRAY_30};
  min-width: 180px;
  height: 100%;
  background-color: ${COOL_GRAY_10};
  color: ${COOL_GRAY_60};

  & .MuiSelect-icon {
    right: 15px;
    font-size: 30px;
  }
`;

export default SearchSelect;
