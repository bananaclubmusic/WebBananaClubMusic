import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';

@Component({
  selector: 'app-vinilos',
  standalone: true,
  imports: [RouterLink, Header, Footer],
  templateUrl: './vinilos.html',
  styleUrls: ['./vinilos.css']
})
export class Vinilos {

  menuOpen = false;

  constructor(private location: Location) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goBack() {
    this.location.back();
  }

}
