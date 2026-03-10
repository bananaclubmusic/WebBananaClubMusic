import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, Header, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


