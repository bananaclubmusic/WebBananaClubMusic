import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  menuOpen = false;

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Banana Club Music | Independent Electronic Label');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Banana Club is an independent electronic label focused on Breakbeat and Uk Garage. Join the club.'
      },
      {
        property: 'og:title',
        content: 'Banana Club Music'
      },
      {
        property: 'og:description',
        content: 'Independent electronic label. Breakbeat · UK Garage'
      },
      {
        property: 'og:image',
        content: 'assets/og-image.jpg'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
