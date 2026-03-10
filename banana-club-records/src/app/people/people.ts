import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Header} from '../components/header/header';


@Component({
  selector: 'app-people',
  standalone: true,
  imports: [RouterLink, Header],
  templateUrl: './people.html',
  styleUrls: ['./people.css'],
})
export class PeopleComponent {

  currentIndex = 0;
  totalImages = 3;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

