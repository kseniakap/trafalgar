import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SelectChangeEvent, SelectProps, styled } from '@mui/material';
import { default as MuiSelect } from '@mui/material/Select';
import { FC, useState } from 'react';

import { COOL_GRAY_10, COOL_GRAY_30, COOL_GRAY_60 } from '~/assets/style/colors';

const Select: FC<SelectProps> = ({ variant = 'outlined', children, placeholder, ...rest }) => {
  const [currentItem, setCurrentItem] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setCurrentItem(event.target.value as string);
  };

  return (
    <StyledSelect
      variant={variant}
      value={currentItem}
      onChange={handleChange}
      displayEmpty
      renderValue={(value) => (value as string) || placeholder}
      IconComponent={KeyboardArrowDownIcon}
      {...rest}
    >
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled(MuiSelect)`
  border-color: ${COOL_GRAY_30};
  min-width: 180px;
  height: 100%;
  width: 100%;
  background-color: ${COOL_GRAY_10};
  color: ${COOL_GRAY_60};

  & .MuiSelect-icon {
    right: 16px;
    font-size: 30px;
  }
`;

export default Select;
