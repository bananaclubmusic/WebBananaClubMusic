import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Header} from '../components/header/header';

@Component({
  selector: 'app-vinilos',
  standalone: true,
  imports: [RouterLink, Header],
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
