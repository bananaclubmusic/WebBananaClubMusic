import { Routes } from '@angular/router';
import { PeopleComponent } from './founder/founder';
import {Artists} from './artists/artists';
import {Vinilos} from './vinilos/vinilos';
import { Merch } from './merch/merch';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About),
  },
  {
    path: 'founder',
    component: PeopleComponent
  },
  { path: 'artists', component: Artists },

  { path: 'vinilos', component: Vinilos },

  { path: 'merch', component: Merch },
  {
    path: '**',
    redirectTo: '',
  }
];
