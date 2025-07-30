import { Component, input } from '@angular/core';
import {Pokemon} from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  template: `
    <div class="pokemon-card">
      <div class="pokemon-name">{{ pokemon().name }}</div>
      <div class="pokemon-url">{{ pokemon().url }}</div>
    </div>
  `,
  styles: `
    .pokemon-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 20px;
      margin: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .pokemon-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .pokemon-name {
      font-size: 18px;
      font-weight: 600;
      color: white;
      text-transform: capitalize;
      margin-bottom: 8px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .pokemon-url {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-family: 'Courier New', monospace;
      word-break: break-all;
      background: rgba(0, 0, 0, 0.2);
      padding: 4px 8px;
      border-radius: 4px;
    }
  `
})
export class PokemonComponent {
  pokemon = input.required<Pokemon>();
}
