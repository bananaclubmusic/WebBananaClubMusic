import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people';

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
    path: 'people',
    component: PeopleComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
