import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {Location, NgIf} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  menuOpen = false;

  constructor(
    private location: Location,
    public router: Router
  ) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  goBack() {
    this.location.back();
  }

}
