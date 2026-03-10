import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [RouterLink, Header, Footer],
  templateUrl: './founder.html',
  styleUrls: ['./founder.css'],
})
export class PeopleComponent {

  currentIndex = 0;
  totalImages = 3;

  // Swipe
  touchStartX = 0;
  touchEndX = 0;

  // Fade
  isFading = false;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  // NEXT con fade
  next() {
    this.triggerFade(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    });
  }

  // PREV con fade
  prev() {
    this.triggerFade(() => {
      this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    });
  }

  // Lógica del fade
  triggerFade(action: () => void) {
    this.isFading = true;

    setTimeout(() => {
      action();
      this.isFading = false;
    }, 300); // mitad del tiempo del fade
  }

  // Swipe
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) < 40) return;

    if (swipeDistance < 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
