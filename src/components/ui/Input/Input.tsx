import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import Stack from '@mui/material/Stack/Stack';
import TextField from '@mui/material/TextField/TextField';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export enum InputType {
  Text = 'text',
  Password = 'password',
  Email = 'email',
}

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  multiline?: boolean;
  type?: InputType;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    label,
    autoFocus,
    placeholder,
    multiline,
    type = InputType.Text,
    leftIcon,
    rightIcon,
  } = props;

  return (
    <>
      <InputContainer direction="column" alignItems="flex-start" spacing={1}>
        <Label className="body-S">{label}</Label>
        <StyledTextField
          id="filled-basic"
          variant="filled"
          size="small"
          type={type}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          autoFocus={autoFocus}
          placeholder={placeholder}
          multiline={multiline}
          minRows={3}
          InputProps={{
            startAdornment: (
              <StartIcon position="start" $leftIcon={!!leftIcon}>
                {leftIcon}
              </StartIcon>
            ),
            endAdornment: (
              <EndIcon position="end" $rightIcon={!!rightIcon}>
                {rightIcon}
              </EndIcon>
            ),
          }}
        />
      </InputContainer>
    </>
  );
};

const InputContainer = styled(Stack)`
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    padding: 0px 2px 2px 0px;
    border-radius: 0;
    background-color: #f2f4f8 !important;
    :hover {
      background-color: #f2f4f8;
      :not(.Mui-disabled, .Mui-error)::before {
        border-bottom: 1px solid #c1c7cd;
      }
    }
    :focus {
      background-color: #f2f4f8;
    }
    ::before,
    ::after {
      border-bottom: 1px solid #c1c7cd;
    }
    textarea {
      resize: vertical;
    }
  }
  input,
  textarea {
    padding: 12px 0px 12px 16px;
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      text-align: left;
      color: #697077;
      opacity: unset;
    }
  }
`;

const StartIcon = styled(InputAdornment)<{ $leftIcon?: boolean }>`
  padding-left: 16px;
  display: ${(props) => (props.$leftIcon ? '' : 'none !important')};
  margin-top: 0px !important;
  margin-right: -4px !important;
`;

const EndIcon = styled(InputAdornment)<{ $rightIcon?: boolean }>`
  padding: 0px 16px;
  display: ${(props) => (props.$rightIcon ? '' : 'none !important')};
`;

const Label = styled.div``;
