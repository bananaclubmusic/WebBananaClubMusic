import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgClass, NgFor, NgIf} from '@angular/common';
import { Header } from '../components/header/header';
import {Footer} from '../components/footer/footer';

interface Artist {
  name: string;
  images: string[];
  description: string;
  instagram: string | null;
  soundcloud: string | null;
  beatport: string | null;
  currentIndex: number;
}

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass, Header, Footer],
  templateUrl: './artists.html',
  styleUrls: ['./artists.css']
})
export class Artists {

  openIndex: number | null = null;

  artists: Artist[] = [
    {
      name: 'Bowser',
      images: [
        'assets/images/bowser3.JPG'
      ],
      description: 'Tras varios años de trayectoria en la producción musical, Bowser se ha consolidado ' +
        'como uno de los nombres más reconocidos de la escena Breakbeat. Su pasión por los ritmos rotos ' +
        'y la musicalidad lo ha llevado a alcanzar el Top 1 en ventas de Beatport en dos ocasiones, ' +
        'así como a actuar en algunos de los festivales más destacados de España.',
      instagram: 'https://www.instagram.com/bowser.music/',
      soundcloud: 'https://soundcloud.com/andreschusti?ref=clipboard&p=a&c=1',
      beatport: 'https://www.beatport.com/es/artist/bowser/47029',
      currentIndex: 0
    },
    {
      name: 'Buson',
      images: [
        'assets/images/buson.jpg',
      ],
      description: 'Buson es un DJ y productor de breakbeat de 25 años que destaca por su sonido enérgico, ' +
        'con bajos potentes y ritmos intensos diseñados para la pista de baile.' +
        'Su propuesta mezcla frescura y contundencia, consolidándolo como una de las ' +
        'voces emergentes del género en la escena andaluza.',
      instagram: 'https://www.instagram.com/buson.wav',
      soundcloud: 'https://soundcloud.com/busonwav',
      beatport: 'https://www.beatport.com/es/artist/buson/1295722',
      currentIndex: 0
    },
    {
      name: 'CoolTasty',
      images: [
        'assets/images/cooltasty2.png',
      ],
      description: 'CoolTasty es un DJ y productor con más de una década de experiencia dentro ' +
        'de la escena electrónica. A lo largo de su trayectoria ha recorrido Andalucía actuando en ' +
        'salas y eventos de referencia. Su proyecto gira en torno al breakbeat y sus diferentes vertientes, ' +
        'desarrollando un enfoque creativo y versátil en cada producción. Su sonido contundente y ' +
        'su constante evolución lo consolidan como un artista sólido dentro del panorama actual.',
      instagram: 'https://www.instagram.com/cooltastymusic',
      soundcloud: 'https://soundcloud.com/cooltasty',
      beatport: 'https://www.beatport.com/es/artist/cooltasty/483050',
      currentIndex: 0
    },
    {
      name: 'Cude',
      images: [
        'assets/images/cude3.jpeg',

      ],
      description: 'Julio López Cuder, conocido artísticamente como Cude, es un DJ y productor con ' +
        'más de una década de experiencia en la industria musical. En 2024 dio un paso clave en su ' +
        'trayectoria al actuar en algunas de las salas y clubs más importantes de Andalucía. ' +
        'Destaca por su versatilidad y creatividad en la producción, cualidades que le han permitido ' +
        'recibir apoyo internacional y colaborar con artistas de primer nivel dentro de la escena electrónica.',
      instagram: 'https://www.instagram.com/cude_music/',
      soundcloud: 'https://soundcloud.com/cude_music',
      beatport: 'https://www.beatport.com/es/artist/cude/838579',
      currentIndex: 0
    },
    {
      name: 'FM-3',
      images: [
        'assets/images/fm_3.jpg',
      ],
      description: 'FM-3, creador del sello Banana Club, es sinónimo de energía en la escena breakbeat. ' +
        'Con un recorrido que lo ha llevado de los clubs andaluces hasta escenarios en Estados Unidos y Reino Unido, ' +
        'se ha consolidado como uno de los DJs más potentes y versátiles del género.',
      instagram: 'https://www.instagram.com/fmguion3/',
      soundcloud: 'https://soundcloud.com/franmarchantres',
      beatport: 'https://www.beatport.com/es/artist/fm-3/402033',
      currentIndex: 0
    },
    {
      name: 'Guau',
      images: [
        'assets/images/guau.jpg',
      ],
      description: 'Raul AKA Guau es la persona detrás de la imagen de Banana Club. ' +
        'Es también el diseñador de sellos como 83, Close Your Eyes, Etiqueta Negra y colaborador principal ' +
        'en proyectos como Waxport y Elektroshok Records.',
      instagram: 'https://www.instagram.com/guau83_/',
      soundcloud: 'https://soundcloud.com/guau',
      beatport: 'https://www.beatport.com/es/artist/guau/117449',
      currentIndex: 0
    },
    {
      name: 'JottaFrank',
      images: [
        'assets/images/jottafrank.jpg',
      ],
      description: 'JottaFrank es un DJ y productor cordobés, referente de la escena electrónica underground andaluza. ' +
        'Reconocido por su gran energía en pista, su sonido fusiona el breakbeat con la electrónica clásica y actual, ' +
        'aportando una visión moderna, directa y orientada al club. ',
      instagram: 'https://www.instagram.com/jottafrankdj/',
      soundcloud: 'https://soundcloud.com/jottafrank',
      beatport: 'https://www.beatport.com/es/artist/jottafrank/739636',
      currentIndex: 0
    },
    {
      name: 'MBreaks',
      images: [
        'assets/images/mbreaks.JPG',
      ],
      description: 'Carmen, también conocida como MBreaks, es una estrella en ' +
        'constante ascenso en la escena del Breakbeat y UKG en España. ' +
        'Ha liderado las listas en plataformas como Beatport y Spotify, ' +
        'y ha actuado en festivales de renombre como Monegros, Dreambeach y elRow, entre otros',
      instagram: 'https://www.instagram.com/mbreaks.officialspain/',
      soundcloud: 'https://soundcloud.com/mbreaks',
      beatport: 'https://www.beatport.com/es/artist/mbreaks/1043009',
      currentIndex: 0
    },
    {
      name: 'Pavane',
      images: [
        'assets/images/pavane.png',
      ],
      description: 'Pavane es un joven productor musical y DJ que inició su trayectoria en 2018, ' +
        'consolidándose progresivamente dentro de la escena electrónica. Su sonido se mueve entre ' +
        'el Breakbeat y el UK Garage, géneros a través de los cuales expresa una identidad fresca y contundente. ' +
        'En cabina destaca por su energía arrolladora y su capacidad para conectar con el público, ' +
        'creando sesiones intensas y vibrantes. A finales de 2022 debutó como DJ de la mano de PureBassline Booking, ' +
        'colectivo del que pronto pasó a formar parte como uno de sus miembros destacados, ' +
        'afianzándose como una de las promesas emergentes del panorama electrónico.',
      instagram: 'https://www.instagram.com/pavane.music/',
      soundcloud: 'https://soundcloud.com/pavanebreaks',
      beatport: 'https://www.beatport.com/es/artist/pavane/334115',
      currentIndex: 0
    },
    {
      name: 'Rhades',
      images: [
        'assets/images/rhades.jpg'
      ],
      description: 'Rhades es un productor que fusiona melodías retro con basslines actuales, ' +
        'construyendo un sonido propio y reconocible. Desde sus inicios en la producción musical, ' +
        'se marcó objetivos claros que ha ido alcanzando progresivamente, publicando en algunos de los ' +
        'sellos más destacados del panorama nacional y logrando posiciones Top a nivel mundial en ' +
        'plataformas musicales. Su proyección y personalidad sonora lo sitúan como una de las promesas ' +
        'más sólidas de la nueva generación.',
      instagram: 'https://www.instagram.com/rhades_official/',
      soundcloud: 'https://soundcloud.com/rhades',
      beatport: 'https://www.beatport.com/es/artist/rhades/767534',
      currentIndex: 0
    },
    {
      name: 'Run The Breaks',
      images: [
        'assets/images/runthebreaks.jpg',
      ],
      description: 'Run The Breaks es el alter ego más canalla de FM-3 y CoolTasty, ' +
        'un proyecto impredecible donde todo puede suceder en cabina. Sus sesiones combinan ' +
        'remixes exclusivos, mezclas rápidas y una visión sin límites del breakbeat en todas ' +
        'sus vertientes, ofreciendo sets intensos y cargados de energía.',
      instagram: 'https://www.instagram.com/runthebreaksofficial/',
      soundcloud: 'https://soundcloud.com/runthebreaksofficial',
      beatport: 'https://www.beatport.com/es/artist/run-the-breaks/700277',
      currentIndex: 0
    },
    {
      name: 'Sans',
      images: [
        'assets/images/sans.jpeg',
      ],
      description: 'Productor emergente que viene consolidándose con fuerza dentro de la escena, ' +
        'publicando música en algunos de los sellos más destacados del panorama nacional. ' +
        'Inició su trayectoria en 2018, influenciado por el sonido retro y el UK Garage, ' +
        'desarrollando una identidad fresca y enérgica. Sus sesiones destacan por su dinamismo ' +
        'y variedad musical, creando una experiencia intensa que mantiene al público en constante movimiento.',
      instagram: 'https://www.instagram.com/sans.breaks/',
      soundcloud: 'https://soundcloud.com/sansbreak',
      beatport: 'https://www.beatport.com/es/artist/sans/254398',
      currentIndex: 0
    },
    {
      name: 'SellRude',
      images: [
        'assets/images/sellrude.jpg',
      ],
      description: 'SellRude es un DJ y productor con más de 11 años de trayectoria en la escena ' +
        'Breaks, destacando desde muy joven por su talento y proyección internacional. Con solo 18 años ' +
        'logró posicionarse entre los productores de Breaks más vendidos a nivel mundial, consolidando ' +
        'un estilo propio basado en ritmos enérgicos, melodías envolventes y una técnica depurada.',
      instagram: 'https://www.instagram.com/sellrude/',
      soundcloud: 'https://soundcloud.com/sellrude',
      beatport: 'https://www.beatport.com/es/artist/sellrude/753458',
      currentIndex: 0
    }
  ];

  toggleArtist(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  nextImage(artist: Artist) {
    artist.currentIndex =
      (artist.currentIndex + 1) % artist.images.length;
  }

  prevImage(artist: Artist) {
    artist.currentIndex =
      (artist.currentIndex - 1 + artist.images.length) % artist.images.length;
  }

  activeArtist: Artist | null = null;

  openModal(artist: Artist) {
    this.activeArtist = artist;
  }

  closeModal() {
    this.activeArtist = null;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
