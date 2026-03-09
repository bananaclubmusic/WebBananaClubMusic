import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  menuOpen = false;

  constructor(private location: Location) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goBack() {
    this.location.back();
  }

}
