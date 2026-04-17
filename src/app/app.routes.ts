import { Routes } from '@angular/router';
import BrokenWrapper from './broken-wrapper';
import BrokenWrapperHome from './broken-wrapper-home';

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
    path: 'broken-wrapper',
    component: BrokenWrapper,
    children: [
      {
        path: '',
        loadComponent: async () => import('./broken-wrapper-home')
      }
    ]
  },
  {
    path: 'broken-wrapper-eager',
    component: BrokenWrapper,
    children: [
      {
        path: '',
        component: BrokenWrapperHome
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./hydration-works')
  }
];
