import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

  menuOpen = false;

  @ViewChild('bananin') bananin!: ElementRef;

  x = 100;
  y = 100;
  dx = 0.12;
  dy = 0.09;

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

  ngAfterViewInit() {
    this.animateBanana();
  }

  animateBanana() {

    const el = this.bananin.nativeElement;

    const move = () => {

      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const maxX = window.innerWidth - width;
      const maxY = window.innerHeight - height;

      this.x += this.dx;
      this.y += this.dy;

      if (this.x <= 0 || this.x >= maxX) this.dx *= -1;
      if (this.y <= 0 || this.y >= maxY) this.dy *= -1;

      el.style.transform = `translate(${this.x}px, ${this.y}px)`;

      requestAnimationFrame(move);
    };

    move();
  }

}
