import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people';
import {Artists} from './artists/artists';



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
  { path: 'artists', component: Artists },
  {
    path: '**',
    redirectTo: '',
  }
];
