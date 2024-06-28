import artVenueLogo from '~/assets/img/logo/artvenue-white.png';
import kontrastrLogo from '~/assets/img/logo/kontrastr-white.png';
import shellsLogo from '~/assets/img/logo/shells-white.png';
import smartFinderLogo from '~/assets/img/logo/smartFinder-white.png';
import wavesMarathonLogo from '~/assets/img/logo/wavesmarathon-white.png';
import zoomerrLogo from '~/assets/img/logo/zoomerr-white.png';

export interface ISponsor {
  name: string;
  logo: string;
}

export const sponsors: ISponsor[] = [
  {
    name: 'Shells',
    logo: shellsLogo,
  },
  {
    name: 'SmartFinder',
    logo: smartFinderLogo,
  },
  {
    name: 'Zoomerr',
    logo: zoomerrLogo,
  },
  {
    name: 'ArtVenue',
    logo: artVenueLogo,
  },
  {
    name: 'Kontrastr',
    logo: kontrastrLogo,
  },
  {
    name: 'WavesMarathon',
    logo: wavesMarathonLogo,
  },
];
