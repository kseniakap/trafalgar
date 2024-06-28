import Arcticle1 from '~/assets/img/arcticles/arcticle1.png';
import Arcticle2 from '~/assets/img/arcticles/arcticle2.png';
import Arcticle3 from '~/assets/img/arcticles/arcticle3.png';

interface IArcticle {
  title: string;
  description: string;
  img: string | null;
  alt: string | null;
  isLoading: boolean;
}
export const arcticlesList: IArcticle[] = [
  {
    title: 'Головная боль',
    description: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ...',
    img: Arcticle1,
    alt: 'Headache arcticle',
    isLoading: false,
  },
  {
    title: 'Мигрень',
    description: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
    img: null,
    alt: null,
    isLoading: true,
  },
  {
    title: 'Доказательная медицина',
    description: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...',
    img: Arcticle2,
    alt: 'Evidence-based medicine arcticle',
    isLoading: false,
  },
  {
    title: 'Антидепрессанты',
    description: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...',
    img: Arcticle3,
    alt: 'Antidepressants arcticle',
    isLoading: false,
  },
];
