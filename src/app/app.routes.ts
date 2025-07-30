import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'broken-else',
    loadComponent: () => import('./broken-else')
  },
  {
    path: 'broken-for-empty',
    loadComponent: () => import('./broken-for-empty')
  },
  {
    path: '',
    loadComponent: () => import('./hydration-works')
  }
];
