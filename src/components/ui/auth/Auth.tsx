import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import { Input, InputType } from '../Input/Input';
import { Routes } from '~/lib/routes';
import { Checkbox, FormControlLabel, IconButton, styled } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthWrapperImg } from './AuthWrapperImg';
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
            <Message>Пароль должен содержать минимум 8 символов, строчные и прописные символы</Message>
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
        <Btns>
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
        <LinkBlue to={linkRoute}>{linkText}</LinkBlue>
      </Div>
    </AuthWrapperImg>
  );
};

const Div = styled('div')(({ theme }) => ({
  width: '560px',
  margin: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.down('iPad')]: {
    margin: '40px 35px',
  },
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
    margin: '32px 16px',
    gap: theme.spacing(4),
  },

  [theme.breakpoints.up('desktop')]: {
    width: '100%',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontSize: '42px',
  fontWeight: '700',
  lineHeight: ' 46.2px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '35px',
  },

  [theme.breakpoints.up('desktopL')]: {
    fontSize: '48px',
  },
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const Message = styled('p')(({ theme }) => ({
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '140%',
  color: theme.palette.coolGray['coolGray-60'],
  marginTop: '4px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '14px',
  },
}));

const Btns = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  [theme.breakpoints.down('iPad')]: {
    flexWrap: 'wrap',
  },
}));

const Line = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.coolGray['coolGray-20'],
  width: '100%',
  height: '1px',
}));

const LinkBlue = styled(Link)(({ theme }) => ({
  color: '#001d6c',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '19.6%',
  textDecoration: 'none',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '18px',
  },
}));
