import StartUsingImg from '@/assets/img/startUsing.png';
import { Box, Stack } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import StartUsingForm from './StartUsingForm';
import SuccessForm from './SuccessForm';
import { FormData } from './interfaces';
import { COOL_GRAY_20, WHITE } from '~/assets/style/colors';
import { navigationLinks } from '~/const/navigationLinks';

const StartUsingBlock: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    theme: '',
    question: '',
    groups: [],
    isAgreedToPolicy: false,
  });

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setFormData({
      name: '',
      surname: '',
      theme: '',
      question: '',
      groups: [],
      isAgreedToPolicy: false,
    });
  };

  const onChangeHandler = (name: string, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClickHandler = () => {
    setIsSuccess(false);
  };

  return (
    <StartUsingContainer>
      <BackgroundImage />
      <FormContainer id={navigationLinks.START_USING.id}>
        <FormContentContainer style={{ visibility: isSuccess ? 'hidden' : 'visible' }}>
          <Stack gap={1}>
            <p className="heading-3">Начать использование</p>
            <p className="body">Хотите начать сотрудничество? Напишите нам</p>
          </Stack>
          <StartUsingForm formData={formData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </FormContentContainer>
        {isSuccess && <SuccessForm onclick={onClickHandler} />}
      </FormContainer>
    </StartUsingContainer>
  );
};

export default StartUsingBlock;

const StartUsingContainer = styled(Box)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding-bottom: ${({ theme }) => theme.spacing(6)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }
`;

const BackgroundImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 45%;

  background: url(${StartUsingImg}) center/cover no-repeat;

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    height: 30%;
  }
`;

const FormContainer = styled(Box)`
  z-index: 1;

  padding: ${({ theme }) => theme.spacing(6)};
  margin: 200px auto 0;

  background-color: ${WHITE};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${COOL_GRAY_20};

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => theme.spacing(2)};
    margin: 65px auto 0;
  }
`;

const FormContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;
