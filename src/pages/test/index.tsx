import { Stack } from '@mui/material';
import React from 'react';

import Frame from '~/assets/icons/Frame.svg';
import Arrow from '~/assets/icons/arrow-right.svg';
import { PageContainer } from '~/components/page';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '~/components/ui/Button/Button';
import { CountCard } from '~/components/ui/Card/CountCard';
import { DropDownCard } from '~/components/ui/Card/DropDownCard';
import { ImageCard } from '~/components/ui/Card/ImgCard';
import { PricingCard } from '~/components/ui/Card/PricingCard';
import { Input, InputType } from '~/components/ui/Input/Input';
import { ArrowLink } from '~/components/ui/Text/ArrowLink';

const TestPage: React.FC = () => {
  const [str, setStr] = React.useState<string>('');
  return (
    <PageContainer>
      <Stack sx={{ width: 500 }} spacing={2}>

        {/* Примеры компонентов */}
        <Input label={'Имя'} placeholder={'Иван'} value={str} onChange={(str) => setStr(str)} autoFocus />

        <Input label={'Вопрос'} placeholder={'Ваш вопрос ...'} value={str} onChange={(str) => setStr(str)} multiline />
        <Input
          label={'Вопрос'}
          placeholder={'Ваш вопрос ...'}
          value={str}
          onChange={(str) => setStr(str)}
          type={InputType.Password}
          rightIcon={<img src={Arrow} />}
        />
        <Input
          label={'Вопрос'}
          placeholder={'Ваш вопрос ...'}
          value={str}
          onChange={(str) => setStr(str)}
          type={InputType.Email}
          leftIcon={<img src={Arrow} />}
        />
        <Button style={ButtonStyle.Contained} text="Отправить" size={ButtonSize.Small} />
        <Button
          style={ButtonStyle.Outlined}
          text="Все статьи"
          size={ButtonSize.Large}
          fullWidth
          textSize={ButtonTextSize.Large}
        />
        <Button style={ButtonStyle.Outlined} text="Отправить" size={ButtonSize.Small} leftIcon={<img src={Arrow} />} />
        <ArrowLink text="Узнать больше" />

        <DropDownCard
          title="В каких городах работает сервис?"
          description="Обращаться можно из любого города России, даже если вы путешествуете за границу: достаточно иметь доступ к интернету и возможность оплатить консультацию онлайн."
        />

        <ImageCard
          image={<img src={Frame} />}
          title="Консультация"
          description={'На нашем форуме вы найдете ответы на вопросы'}
          linkText="Узнать больше"
          withIcon
        />
        <ImageCard
          image={<img src={Frame} />}
          title="Головная боль"
          description={
            'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ...'
          }
          linkText="Узнать больше"
        />

        <PricingCard
          title="Стажер"
          description="Для начинающих специалистов"
          discount="$25"
          price="$35"
          monthPrice="$25"
          services={['Инфекции', 'Общая медицина', 'Травмы', 'Терапия', 'Неврология']}
        />
        <CountCard count="250+" description="Научных статей" icon={<img src={Arrow} />} />
      </Stack>
    </PageContainer>
  );
};

export default TestPage;
