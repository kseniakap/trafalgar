import StartUsingImg from '@/assets/img/startUsing.png';
import { Box } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import StartUsingForm from './StartUsingForm';
import SuccessForm from './SuccessForm';
import { FormData } from './interfaces';
import { COOL_GRAY_20, WHITE } from '~/assets/style/colors';

const StartUsingBlock: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    theme: '',
    question: '',
    groups: [],
  });

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const onChangeHandler = (name: string, value: string) => {
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
      <FormContainer>
        <FormContentContainer style={{ visibility: isSuccess ? 'hidden' : 'visible' }}>
          <Box>
            <p className="heading-3">Начать использование</p>
            <p className="body">Хотите начать сотрудничество? Напишите нам</p>
          </Box>
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
  height: 35%;

  background: url(${StartUsingImg}) center/cover no-repeat;
`;

const FormContainer = styled(Box)`
  z-index: 1;

  padding: ${({ theme }) => theme.spacing(6)};
  margin: auto;

  background-color: ${WHITE};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${COOL_GRAY_20};

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => theme.spacing(2)};
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
