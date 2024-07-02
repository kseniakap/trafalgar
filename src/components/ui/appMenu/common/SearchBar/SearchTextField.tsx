import searchIcon from '@/assets/icons/search.svg';
import { ImageListItem, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { COOL_GRAY_10, COOL_GRAY_30, COOL_GRAY_60 } from '~/assets/style/colors';

const SearchTextField: FC<TextFieldProps> = ({ variant = 'outlined', ...rest }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const inputProps = {
    startAdornment: (
      <InputAdornment position="start" sx={{ height: '100%' }}>
        <ImageListItem>
          <img
            src={searchIcon}
            alt="Search Icon"
            style={{
              width: 'auto',
              height: 'auto',
              display: focused ? 'none' : 'flex',
            }}
          />
        </ImageListItem>
      </InputAdornment>
    ),
    sx: { height: '100%' },
  };

  return (
    <StyledTextField
      variant={variant}
      placeholder="Поиск по ..."
      fullWidth
      InputProps={inputProps}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default SearchTextField;

const StyledTextField = styled(TextField)<TextFieldProps>`
  height: 100%;
  background-color: ${COOL_GRAY_10};
  color: ${COOL_GRAY_60};
  ${({ variant }) => {
    switch (variant) {
      case 'standard':
        return `
          .MuiInput-underline:before {
            border-bottom: 1px solid ${COOL_GRAY_30};
          }
          .MuiInputAdornment-root {
            padding-left: 16px;
          }
        `;
      default:
        return '';
    }
  }}
`;
