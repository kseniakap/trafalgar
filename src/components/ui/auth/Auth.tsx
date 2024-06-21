import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonSize, ButtonStyle } from '../Button/Button';
import { Input, InputType } from '../Input/Input';
import { Routes } from '~/lib/routes';
import { Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';

interface AuthProps {
  isLogin: boolean;
}

export const Auth: FC<AuthProps> = ({isLogin }) => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return(
    <Div>
      <Title>{isLogin ? 'Вход' : 'Регистрация'}</Title>
      <Form onSubmit={(e) => {e.preventDefault(); alert('submit!'); }}>
         {
          !isLogin && (
            <>
              <Input
                value={name}
                label="Имя"
                type={InputType.Text}
                onChange={setName}/>
              <Input
                value={surname}
                label="Фамилия"
                type={InputType.Text}
                onChange={setSurname}/>
            </>
          )
         }
        <Input value={email} label="Email" type={InputType.Email} onChange={setEmail}/>
        <Input
          value={password}
          label="Пароль"
          type={showPassword ? InputType.Text: InputType.Password}
          onChange={setPassword}
          rightIcon={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {
          isLogin ? (
            <StyledFormControlLabel control={<Checkbox/>} label="Запомнить меня" />) : (
            <StyledFormControlLabel control={<Checkbox/>} label="Согласен с политикой обработки персональных данных" />
          )
        }
        <Button
          text={isLogin ? 'Вход' : 'Зарегистрироваться'}
          style={ButtonStyle.Contained}
          size={ButtonSize.Large}
          fullWidth={true} />
      </Form>
      <Btns>
        <Button
          text="Вход с помощью Google"
          style={ButtonStyle.Outlined}
          size={ButtonSize.Small}
          leftIcon={
            <IconButton>
              <GoogleIcon color="primary"/>
            </IconButton>}
          />
        <Button
          text="Вход с помощью Apple"
          style={ButtonStyle.Outlined}
          size={ButtonSize.Small}
          leftIcon={
            <IconButton>
              <AppleIcon color="primary"/>
            </IconButton>}
          />
      </Btns>
      <Line/>
      {
        isLogin ? (
          <LinkBlue to={Routes.REGISTER}>
            Нет аккаунта? Зарегистрироваться
          </LinkBlue>
        ): (
          <LinkBlue to={Routes.LOGIN}>
            Уже есть аккаунт?
          </LinkBlue>
        )
      }
    </Div>
  );
};

const Div = styled.div`
  padding: 60px;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 46.2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  background-color:#DDE1E6;
  width: 100%;
  height: 1px;
`;

const LinkBlue = styled(Link)`
  color: #001D6C;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  text-decoration: none;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
  }
`;
