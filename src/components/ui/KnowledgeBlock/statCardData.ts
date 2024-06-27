import pizzaIcon from '~/assets/icons/pizza.svg';
import pizzaBoxIcon from '~/assets/icons/pizzaBox.svg';
import sheetIcon from '~/assets/icons/sheet.svg';
import sheetBoxIcon from '~/assets/icons/sheetBox.svg';
import smileIcon from '~/assets/icons/smile.svg';
import smileBoxIcon from '~/assets/icons/smileBox.svg';
import usersIcon from '~/assets/icons/users.svg';
import usersBoxIcon from '~/assets/icons/usersBox.svg';

export interface IStatCardData {
  value: number;
  title: string;
  icon: string;
  iconAlt: string;
}

export const statCardData: IStatCardData[] = [
  {
    value: 250,
    title: 'Научных статей',
    icon: smileBoxIcon,
    iconAlt: smileIcon,
  },
  {
    value: 600,
    title: 'Просмотров за статью',
    icon: sheetBoxIcon,
    iconAlt: sheetIcon,
  },
  {
    value: 1800,
    title: 'Посетителей в день',
    icon: pizzaBoxIcon,
    iconAlt: pizzaIcon,
  },
  {
    value: 11000,
    title: 'Посетителей в неделю',
    icon: usersBoxIcon,
    iconAlt: usersIcon,
  },
];
