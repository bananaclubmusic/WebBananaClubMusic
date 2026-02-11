import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

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
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './artists.html',
  styleUrls: ['./artists.css']
})
export class Artists {

  openIndex: number | null = null;

  artists: Artist[] = [
    {
      name: 'Bowser',
      images: [
        'assets/images/bowser.JPG',
        'assets/images/bowser2.JPG',
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
        'assets/images/buson2.png'
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
        'assets/images/cooltasty.png'
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
        'assets/images/cude.jpg',
        'assets/images/cude1.jpg'
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
      name: 'JottaFrank',
      images: [
        'assets/images/jottafrank.jpg',
        'assets/images/jottafrank2.jpg'
      ],
      description: '-',
      instagram: 'https://www.instagram.com/jottafrankdj/',
      soundcloud: 'https://soundcloud.com/jottafrank',
      beatport: 'https://www.beatport.com/es/artist/jottafrank/739636',
      currentIndex: 0
    },
    {
      name: 'MBreaks',
      images: [
        'assets/images/mbreaks.JPG',
        'assets/images/mbreaks2.JPG',
        'assets/images/mbreaks3.JPG'
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
        'assets/images/pavane2.png'
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
      description: 'RHADES es un productor que fusiona melodías retro con basslines actuales, ' +
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
      name: 'SellRude',
      images: [
        'assets/images/sellrude.jpg',
        'assets/images/sellrude2.jpg'
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
}
