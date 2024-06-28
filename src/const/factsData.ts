import artVenueLogo from '~/assets/img/logo/artvenue.png';
import zoomerrLogo from '~/assets/img/logo/zoomerr.png';

export interface IFactData {
  author: string;
  job: string;
  text: string;
  company: string;
  companyLogo: string;
  avatar?: string;
}

export const factsData: IFactData[] = [
  {
    author: 'Петров Петр',
    job: 'Невролог',
    text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
    company: 'zoomerr',
    companyLogo: zoomerrLogo,
  },
  {
    author: 'Кириллов Кирилл',
    job: 'Пульмонолог',
    text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
    company: 'art venue',
    companyLogo: artVenueLogo,
  },
  {
    author: 'Петров Петр',
    job: 'Невролог',
    text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
    company: 'zoomerr',
    companyLogo: zoomerrLogo,
  },
  {
    author: 'Кириллов Кирилл',
    job: 'Пульмонолог',
    text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
    company: 'art venue',
    companyLogo: artVenueLogo,
  },
];
