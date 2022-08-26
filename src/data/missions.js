import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import GenesisImg from '../images/Genesis.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import MoonImg from '../images/Lua.png';
import Voyager1Img from '../images/Voyager1.png';
import EstacaoImg from '../images/EstacaoInternacional.png';
import KeplerImg from '../images/Kepler.png';

const USA = 'Estados Unidos';
const URSS = 'URSS';

const Missions = [
  {
    name: 'Apollo 11',
    year: '1960',
    country: USA,
    destination: 'Lua',
    place: MoonImg,
  },
  {
    name: 'Voyager 1',
    year: '1977',
    country: USA,
    destination: 'Espaço interestelar',
    place: Voyager1Img,
  },
  {
    name: 'Mars Pathfinder',
    year: '1996',
    country: USA,
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Estação Internacional Espacial',
    year: '1998',
    country: 'Estados Unidos e Rússia',
    destination: 'Órbita terrestre',
    place: EstacaoImg,
  },
  {
    name: 'Kepler',
    year: '2009',
    country: USA,
    destination: 'Espaço interestelar',
    place: KeplerImg,
  },
  {
    name: 'Cassini-Huygens',
    year: '2009',
    country: 'Estados Unidos e União Europeia',
    destination: 'Saturno',
    place: SaturnoImg,
  },
  {
    name: 'Mariner 2',
    year: '1962',
    country: USA,
    destination: 'Vênus',
    place: VenusImg,
  },
  {
    name: 'Venera 4',
    year: '1967',
    country: URSS,
    destination: 'Vênus',
    place: VenusImg,
  },
  {
    name: 'Mariner 5',
    year: '1967',
    country: USA,
    destination: 'Vênus',
    place: VenusImg,
  },
  {
    name: 'Mariner 10',
    year: '1975',
    country: USA,
    destination: 'Vênus',
    place: VenusImg,
  },
  {
    name: 'Venera 16',
    year: '1983',
    country: URSS,
    destination: 'Vênus',
    place: VenusImg,
  },
  {
    name: 'MESSENGER',
    year: '2004',
    country: USA,
    destination: 'Mercúrio',
    place: MercurioImg,
  },
  {
    name: 'Genesis',
    year: '2001',
    country: USA,
    destination: 'Terra',
    place: GenesisImg,
  },
  {
    name: '2001 Mars Odyssey',
    year: '2001',
    country: USA,
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Mars Surveyor 98 Lander',
    year: '1999',
    country: USA,
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Nozomi (Planeta B)',
    year: '1998',
    country: 'Japão',
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Fobos 1',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Fobos 2',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    place: MarteImg,
  },
  {
    name: 'Galileo',
    year: '1989',
    country: USA,
    destination: 'Júpiter',
    place: JupiterImg,
  },
  {
    name: 'Cassini/Huygens',
    year: '1997',
    country: 'Estados Unidos e Europa',
    destination: 'Saturno',
    place: SaturnoImg,
  },
];

export default Missions;
