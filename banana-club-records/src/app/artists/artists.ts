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
      name: 'Bowser',
      images: [
        'assets/images/bowser.JPG',
        'assets/images/bowser2.JPG',
        'assets/images/bowser3.JPG'
      ],
      description: 'Tras varios años de trayectoria en la producción musical, Bowser se ha consolidado ' +
        'como uno de los nombres más reconocidos de la escena Breakbeat. Su pasión por los ritmos rotos ' +
        'y la musicalidad lo ha llevado a alcanzar el Top 1 en ventas de Beatport en dos ocasiones, ' +
        'así como a actuar en algunos de los festivales más destacados de España.'
      ,
      instagram: 'https://www.instagram.com/bowser.music/',
      soundcloud: 'https://soundcloud.com/andreschusti?ref=clipboard&p=a&c=1',
      beatport: 'https://www.beatport.com/es/artist/bowser/47029',
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
        'creando sesiones intensas y vibrantes.'
      ,
      instagram: 'https://www.instagram.com/pavane.music/',
      soundcloud: 'https://soundcloud.com/pavanebreaks',
      beatport: 'https://www.beatport.com/es/artist/pavane/334115',
      currentIndex: 0
    },
    {
      name: 'Rhades',
      images: [
        'assets/images/rhades.jpg',

      ],
      description: 'Rhades es un productor que fusiona melodías retro con basslines actuales, ' +
        'construyendo un sonido propio y reconocible. Desde sus inicios en la producción musical, ' +
        'se marcó objetivos claros que ha ido alcanzando progresivamente, publicando en algunos de los ' +
        'sellos más destacados del panorama nacional y logrando posiciones Top a nivel mundial en ' +
        'plataformas musicales. Su proyección y personalidad sonora lo sitúan como una de las promesas ' +
        'más sólidas de la nueva generación.'
      ,
      instagram: 'https://www.instagram.com/rhades_official/',
      soundcloud: 'https://soundcloud.com/rhades',
      beatport: 'https://www.beatport.com/es/artist/rhades/767534',
      currentIndex: 0
    },
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
