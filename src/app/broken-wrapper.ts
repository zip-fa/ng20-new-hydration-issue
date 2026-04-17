import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-broken-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="page-container">
      <div class="header">
        <h1 class="title">💥 Broken Nested router-outlet</h1>
        <p class="description">Wrapper component with its own router-outlet + child loadComponent breaks hydration</p>
      </div>

      <router-outlet />
    </div>
  `
})
export default class BrokenWrapper {}