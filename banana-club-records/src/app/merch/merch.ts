import { Component } from '@angular/core';
import {Footer} from '../components/footer/footer';
import {Header} from '../components/header/header';

@Component({
  selector: 'app-merch',
  imports: [
    Footer,
    Header
  ],
  templateUrl: './merch.html',
  styleUrl: './merch.css',
})
export class Merch {

  currentSide: boolean[] = [true, true, true, true, true];

  toggleSide(index: number) {
    this.currentSide[index] = !this.currentSide[index];
  }

}
