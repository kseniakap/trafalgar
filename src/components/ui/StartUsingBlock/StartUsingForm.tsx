import Select from '@/components/ui/Select';
import { Box, Checkbox, FormControl, FormControlLabel, Stack, useMediaQuery, useTheme } from '@mui/material';
import { FC, FormEvent } from 'react';
import styled from 'styled-components';

import { Button, ButtonStyle, ButtonType } from '../Button/Button';
import { Input } from '../Input/Input';
import GroupMenuItems from './GroupMenuItems';
import { FormData } from './interfaces';
import { WHITE } from '~/assets/style/colors';

interface StartUsingFormProps {
  onSubmitHandler: (e: FormEvent) => void;
  onChangeHandler: (name: string, value: string) => void;
  formData: FormData;
}

const StartUsingForm: FC<StartUsingFormProps> = ({ onSubmitHandler, onChangeHandler, formData }) => {
  const { name, question, surname, theme } = formData;
  const muiTheme = useTheme();
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('tablet'));
  return (
    <Box onSubmit={onSubmitHandler} component="form">
      <Stack gap="16px">
        <Stack direction="row" gap={2}>
          <CustomInput
            label="Имя"
            placeholder="Иван"
            value={name}
            onChange={(value) => onChangeHandler('name', value)}
          ></CustomInput>
          <CustomInput
            label="Фамилия"
            placeholder="Иванов"
            value={surname}
            onChange={(value) => onChangeHandler('surname', value)}
          ></CustomInput>
        </Stack>

        <CustomInput
          label="Тема"
          placeholder="Сотрудничество"
          value={theme}
          onChange={(value) => onChangeHandler('theme', value)}
        ></CustomInput>

        <Input
          label="Вопрос"
          multiline
          placeholder="Ваш вопрос ..."
          value={question}
          onChange={(value) => onChangeHandler('question', value)}
          minRows={isTablet ? 1 : 3}
        ></Input>
        <FormControl>
          <span style={{ paddingBottom: '8px' }} className="body-s">
            Группы
          </span>
          <Box sx={{ height: '48px' }}>
            <Select placeholder="Группы" variant="filled">
              <GroupMenuItems />
            </Select>
          </Box>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                'alignSelf': 'flex-start',
                '&.Mui-checked': {
                  color: '#458FF6', // изменяем цвет на красный
                },
              }}
            ></Checkbox>
          }
          label={<p className="body-s">Согласен с политикой обработки данных</p>}
        ></FormControlLabel>
        <CustomButton type={ButtonType.Submit} text="Отправить" style={ButtonStyle.Contained}></CustomButton>
      </Stack>
    </Box>
  );
};

export default StartUsingForm;

const CustomInput = styled(Input)`
  .MuiInputBase-root {
    height: 48px;
  }
`;

const CustomButton = styled(Button)`
  align-self: flex-end;
  width: 140px;
  color: ${WHITE} !important;
`;
