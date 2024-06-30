import { default as Btn } from '@mui/material/Button';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { SECONDARY_BG, WHITE } from '~/assets/style/colors';

export enum ButtonStyle {
  Contained = 'contained',
  Outlined = 'outlined',
}

export enum ButtonSize {
  Small = 1,
  Medium = 2,
  Large = 3,
}

export enum ButtonTextSize {
  Small = 'btn-text-s',
  Medium = 'btn-text-m',
  Large = 'btn-text-l',
}

interface ButtonProps {
  text: string;
  style: ButtonStyle;
  size?: ButtonSize;
  textSize?: ButtonTextSize;
  fullWidth?: boolean;
  leftIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
}

const getPadding = (size?: ButtonSize) => {
  switch (size) {
    case ButtonSize.Small:
      return '12px 16px !important';
    case ButtonSize.Large:
      return '18px 32px !important';
    default:
      return '16px 28px !important';
  }
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { text, style, size, textSize, fullWidth, onClick, leftIcon, className } = props;
  return (
    <StyledButton
      variant={style}
      onClick={onClick}
      $btnSize={size}
      $btnStyle={style}
      fullWidth={fullWidth}
      className={className}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick;
        }
      }}
    >
      {leftIcon}
      <span className={textSize || 'btn-text-m'}>{text}</span>
    </StyledButton>
  );
};

const StyledButton = styled(Btn)<{ $btnSize?: ButtonSize; $btnStyle: ButtonStyle }>`
  display: flex;
  gap: 8px;
  padding: ${(props) => getPadding(props.$btnSize)};
  background-color: ${(props) => (props.$btnStyle === ButtonStyle.Outlined ? 'none' : `${SECONDARY_BG} !important`)};
  color: ${(props) => (props.$btnStyle === ButtonStyle.Outlined ? `${SECONDARY_BG} !important` : `${WHITE}`)};
  text-transform: none !important;
  outline: 2px solid ${SECONDARY_BG} !important;
  border: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
`;
