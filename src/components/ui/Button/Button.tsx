import { default as Btn } from '@mui/material/Button/Button';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

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
  Small = 'btn-text-S',
  Medium = 'btn-text-M',
  Large = 'btn-text-L',
}

interface ButtonProps {
  text: string;
  style: ButtonStyle;
  size?: ButtonSize;
  textSize?: ButtonTextSize;
  fullWidth?: boolean;
  leftIcon?: ReactElement;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { text, style, size, textSize, fullWidth, onClick, leftIcon } = props;
  return (
    <ButtonContainer>
      <StyledButton
        variant={style}
        onClick={onClick}
        $btnSize={size}
        $btnStyle={style}
        fullWidth={fullWidth}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick;
          }
        }}
      >
        {leftIcon}
        <BtnText className={textSize || 'btn-text-M'}>{text}</BtnText>
      </StyledButton>
    </ButtonContainer>
  );
};

const StyledButton = styled(Btn)<{ $btnSize?: ButtonSize; $btnStyle: ButtonStyle }>`
  display: flex;
  gap: 8px;
  border-radius: 0px !important;
  text-transform: none !important;
  outline: 2px solid #458ff6 !important;
  border: none !important;
  box-shadow: none !important;
  background-color: ${(props) => (props.$btnStyle === ButtonStyle.Outlined ? 'none' : '#458FF6 !important')};
  color: ${(props) => (props.$btnStyle === ButtonStyle.Outlined ? '#458FF6 !important' : 'white')};
  padding: ${(props) =>
    props.$btnSize === ButtonSize.Small
      ? '12px 16px !important'
      : props.$btnSize === ButtonSize.Large
      ? '18px 32px !important'
      : '16px 28px !important'};
`;
const ButtonContainer = styled.div``;

const BtnText = styled.div``;
