import { Component, inject } from '@angular/core';
import {PokemonComponent} from './pokemon';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-broken-else',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <div class="page-container">
      <div class="header">
        <h1 class="title">🚨 Broken else Block</h1>
        <p class="description">This page uses else block which breaks hydration</p>
      </div>

      @if (pokemonService.pokemons.hasValue()) {
        <div class="pokemons-list">
          @for (pokemon of pokemonService.pokemons.value().results || []; track pokemon.name) {
            <app-pokemon [pokemon]="pokemon" />
          }
        </div>
      } @else {
        <div class="no-value">
          <div class="loading-spinner"></div>
          <p>No value available</p>
        </div>
      }
    </div>
  `
})
export default class BrokenElse {
  pokemonService = inject(PokemonService);
}
