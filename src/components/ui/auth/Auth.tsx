import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import { Input, InputType } from '../Input/Input';
import { Routes } from '~/lib/routes';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';

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
    <Div>
      <Title>{isLogin ? 'Вход' : 'Регистрация'}</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          alert('submit!');
        }}
      >
        {!isLogin && (
          <>
            <Input value={name} label="Имя" type={InputType.Text} onChange={(e) => handleChange(e, 'name')} />
            <Input value={surname} label="Фамилия" type={InputType.Text} onChange={(e) => handleChange(e, 'surname')} />
          </>
        )}
        <Input value={email} label="Email" type={InputType.Email} onChange={(e) => handleChange(e, 'email')} />
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
        <StyledFormControlLabel
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
      <Btns>
        <Button
          text="Вход с помощью Google"
          style={ButtonStyle.Outlined}
          size={ButtonSize.Small}
          textSize={ButtonTextSize.Medium}
          fullWidth
          leftIcon={<GoogleIcon />}
        />
        <Button
          text="Вход с помощью Apple"
          style={ButtonStyle.Outlined}
          size={ButtonSize.Small}
          textSize={ButtonTextSize.Medium}
          fullWidth
          leftIcon={<AppleIcon />}
        />
      </Btns>
      <Line />
      <LinkBlue to={linkRoute}>{linkText}</LinkBlue>
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
  background-color: #dde1e6;
  width: 100%;
  height: 1px;
`;

const LinkBlue = styled(Link)`
  color: #001d6c;
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
