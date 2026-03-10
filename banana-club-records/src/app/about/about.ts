import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Header} from '../components/header/header';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, Header],
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


