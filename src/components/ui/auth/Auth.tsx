import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import { Input, InputType } from '../Input/Input';
import { Routes } from '~/lib/routes';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthWrapperImg } from './AuthWrapperImg';
import styled from 'styled-components';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';
import { COOL_GRAY_20, COOL_GRAY_60 } from '~/assets/style/colors';
import muiTheme from '~/lib/themes/muiTheme';

interface AuthProps {
  isLogin: boolean;
}

export const Auth: FC<AuthProps> = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const { name, surname, email, password, showPassword } = formData;

  const linkRoute = isLogin ? Routes.REGISTER : Routes.LOGIN;
  const linkText = isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт?';

  const handleChange = (e: string | React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const value = typeof e === 'string' ? e : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleTogglePassword = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showPassword: !prevFormData.showPassword,
    }));
  };

  return (
    <AuthWrapperImg>
      <Div breakpoint={Breakpoints.tablet}>
        <Title breakpoint={Breakpoints.tablet}>{isLogin ? 'Вход' : 'Регистрация'}</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            alert('submit!');
          }}
        >
          {!isLogin && (
            <>
              <Input value={name} label="Имя" type={InputType.Text} onChange={(e) => handleChange(e, 'name')} />
              <Input
                value={surname}
                label="Фамилия"
                type={InputType.Text}
                onChange={(e) => handleChange(e, 'surname')}
              />
            </>
          )}
          <Input value={email} label="Email" type={InputType.Email} onChange={(e) => handleChange(e, 'email')} />
          <div>
            <Input
              value={password}
              label="Пароль"
              type={showPassword ? InputType.Text : InputType.Password}
              onChange={(e) => handleChange(e, 'password')}
              rightIcon={
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
            <Message breakpoint={Breakpoints.tablet}>
              Пароль должен содержать минимум 8 символов, строчные и прописные символы
            </Message>
          </div>
          <FormControlLabel
            control={<Checkbox />}
            label={isLogin ? 'Запомнить меня' : 'Согласен с политикой обработки персональных данных'}
          />
          <Button
            text={isLogin ? 'Вход' : 'Зарегистрироваться'}
            style={ButtonStyle.Contained}
            size={ButtonSize.Large}
            fullWidth
          />
        </Form>
        <Btns breakpoint={Breakpoints.iPad}>
          <Button
            text="Вход с помощью Google"
            style={ButtonStyle.Outlined}
            size={muiTheme.breakpoints.down('tablet') ? ButtonSize.Small : ButtonSize.Large}
            textSize={muiTheme.breakpoints.down('tablet') ? ButtonTextSize.Small : ButtonTextSize.Large}
            fullWidth
            leftIcon={<GoogleIcon />}
          />
          <Button
            text="Вход с помощью Apple"
            style={ButtonStyle.Outlined}
            size={muiTheme.breakpoints.down('tablet') ? ButtonSize.Small : ButtonSize.Large}
            textSize={muiTheme.breakpoints.down('tablet') ? ButtonTextSize.Small : ButtonTextSize.Large}
            fullWidth
            leftIcon={<AppleIcon />}
          />
        </Btns>
        <Line />
        <LinkBlue breakpoint={Breakpoints.desktop} to={linkRoute}>
          {linkText}
        </LinkBlue>
      </Div>
    </AuthWrapperImg>
  );
};


const Div = styled.div<{ breakpoint: number }>`
  width: 560px;
  margin: 80px 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: ${Breakpoints.iPad}px) {
    width: 480px;
    gap: 32px;
  }
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    width: 100%;
    margin: 32px 16px;
  }

  @media (min-width: ${Breakpoints.desktop}px) {
    width: 100%;
  }
`;

const Title = styled.h2<{ breakpoint: number }>`
  font-size: 42px;
  font-weight: 700;
  line-height: 46.2px;
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    font-size: 35px;
  }
  @media (min-width: ${Breakpoints.desktop}px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Message = styled.p<{ breakpoint: number }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${COOL_GRAY_60};
  margin-top: 4px;
  @media (min-width: ${Breakpoints.desktop}px) {
    font-size: 14px;
  }
`;

const Btns = styled.div<{ breakpoint: number }>`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media screen and (max-width: ${(props) => props.breakpoint}px) {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
`;

const Line = styled.div`
  background-color: ${COOL_GRAY_20};
  width: 100%;
  height: 1px;
`;

const LinkBlue = styled(Link)<{ breakpoint: number }>`
  color: #001d6c;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  text-decoration: none;
  @media screen and (min-width: ${(props) => props.breakpoint}px) {
     font-size: 18px;
    }
  }
`;
