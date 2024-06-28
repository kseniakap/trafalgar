import facebookIcon from '~/assets/icons/facebook.svg';
import instagramIcon from '~/assets/icons/instagram.svg';
import linkedinIcon from '~/assets/icons/linkedin.svg';
import twitterIcon from '~/assets/icons/twitter.svg';
import youtubeIcon from '~/assets/icons/youtube.svg';

export interface ILink {
  text: string;
  href: string;
}

export interface ILinkIcon extends ILink {
  img: string;
}

export const adultCategory: ILink[] = [
  {
    text: 'Кардиология',
    href: '#',
  },
  {
    text: 'Терапия',
    href: '#',
  },
  {
    text: 'Флебология',
    href: '#',
  },
  {
    text: 'Травмы',
    href: '#',
  },
];

export const childCategory: ILink[] = [
  {
    text: 'Педиатрия',
    href: '#',
  },
  {
    text: 'Инфекции',
    href: '#',
  },
  {
    text: 'Неврология',
    href: '#',
  },
  {
    text: 'Фтизиатрия',
    href: '#',
  },
];

export const newsCategory: ILink[] = [
  {
    text: 'Новости здравоохранения',
    href: '#',
  },
  {
    text: 'Открытия',
    href: '#',
  },
  {
    text: 'Документы',
    href: '#',
  },
  {
    text: 'Справочники',
    href: '#',
  },
];

export const mainCategory: ILink[] = [
  {
    text: 'Медицина',
    href: '#',
  },
  {
    text: 'Наука',
    href: '#',
  },
  {
    text: 'Инновации',
    href: '#',
  },
];

export const socialCategory: ILinkIcon[] = [
  {
    text: 'YouTube',
    href: 'https://www.youtube.com/',
    img: youtubeIcon,
  },
  {
    text: 'Facebook',
    href: 'https://www.facebook.com/',
    img: facebookIcon,
  },
  {
    text: 'Twitter',
    href: 'http://twitter.com/',
    img: twitterIcon,
  },
  {
    text: 'Instagram',
    href: 'https://www.instagram.com/',
    img: instagramIcon,
  },
  {
    text: 'Linkedin',
    href: 'https://linkedin.com',
    img: linkedinIcon,
  },
];
