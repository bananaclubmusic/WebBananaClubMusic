import { Component, AfterViewInit, ElementRef } from '@angular/core';
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

  menuOpen = false; // 👈 estado del hamburger

  constructor(
    private title: Title,
    private meta: Meta,
    private el: ElementRef
  ) {
    this.title.setTitle('Banana Club Music');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Banana Club is an independent electronic label focused on Breakbeat and Uk Garage. Send us your demo.'
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
        content: 'https://TU_DOMINIO/assets/og-image.jpg'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]);
  }

  // 👇 toggle del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngAfterViewInit() {
    const logo = this.el.nativeElement.querySelector('.floating-bg');

    let x = 50;
    let y = 50;
    let vx = 0.10;
    let vy = 0.10;

    const animate = () => {
      const w = window.innerWidth - logo.offsetWidth;
      const h = window.innerHeight - logo.offsetHeight;

      x += vx;
      y += vy;

      if (x <= 0 || x >= w) vx *= -1;
      if (y <= 0 || y >= h) vy *= -1;

      logo.style.left = x + 'px';
      logo.style.top = y + 'px';

      requestAnimationFrame(animate);
    };

    animate();
  }
}
