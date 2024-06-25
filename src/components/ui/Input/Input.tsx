import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

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
  className?: string;
}

export const Input: FC<InputProps> = (props: InputProps) => {
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
    className,
  } = props;

  return (
    <>
      <InputContainer direction="column" alignItems="flex-start" spacing={1} className={className}>
        <span className="body-s">{label}</span>
        <StyledTextField
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
            startAdornment: leftIcon && <StartIcon position="start">{leftIcon}</StartIcon>,
            endAdornment: rightIcon && <EndIcon position="end">{rightIcon}</EndIcon>,
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
    @media (min-width: ${Breakpoints.desktop}px) {
      padding: 16px 0px 16px 20px;
      font-size: 22px;
    }
    ::placeholder {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      color: #697077;
      opacity: unset;
    }
  }
`;

const StartIcon = styled(InputAdornment)`
  padding-left: 16px;
  margin-top: 0px !important;
  margin-right: -4px !important;
`;

const EndIcon = styled(InputAdornment)`
  padding: 0px 16px;
`;
