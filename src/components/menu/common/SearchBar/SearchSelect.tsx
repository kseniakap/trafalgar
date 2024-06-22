import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select, SelectChangeEvent, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';

const categories = [
  'Тонометры',
  'Дерматология',
  'Инфекционные болезни',
  'Кардиология',
  'Неврология',
  'Общая медицина',
  'Терапия',
  'Хирургия',
];

const SearchSelect: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentCategory(event.target.value);
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
      {categories.map((category) => (
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
