import { Component, inject } from '@angular/core';
import {PokemonComponent} from './pokemon';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-broken-for-empty',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <div class="page-container">
      <div class="header">
        <h1 class="title">🔥 Broken empty Block</h1>
        <p class="description">This page uses empty block which breaks hydration</p>
      </div>

      @let pokemons = pokemonService.pokemons.hasValue() ? (pokemonService.pokemons.value().results || []) : [];

      <div class="pokemons-list">
        @for (pokemon of pokemons; track pokemon.name) {
          <app-pokemon [pokemon]="pokemon" />
        } @empty {
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>No Pokémon Found</h3>
            <p>The list is empty, try refreshing the page</p>
          </div>
        }
      </div>
    </div>
  `
})
export default class BrokenForEmpty {
  pokemonService = inject(PokemonService);
}
