import { Component, inject } from '@angular/core';
import {PokemonComponent} from './pokemon';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-hydration-works',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <div class="page-container">
      <div class="header">
        <h1 class="title">✅ Hydration Works</h1>
        <p class="description">This page works correctly without else or empty blocks</p>
      </div>

      @if (pokemonService.pokemons.hasValue()) {
        <div class="pokemons-list">
          @for (pokemon of pokemonService.pokemons.value().results || []; track pokemon.name) {
            <app-pokemon [pokemon]="pokemon" />
          }
        </div>
      }
    </div>
  `
})
export default class HydrationWorks {
  pokemonService = inject(PokemonService);
}
