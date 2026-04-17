import { Component, inject } from '@angular/core';
import { PokemonComponent } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-broken-wrapper-home',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    @if (pokemonService.pokemons.hasValue()) {
      <div class="pokemons-list">
        @for (pokemon of pokemonService.pokemons.value().results || []; track pokemon.name) {
          <app-pokemon [pokemon]="pokemon" />
        }
      </div>
    } @else {
      Hello!
    }
  `
})
export default class BrokenWrapperHome {
  pokemonService = inject(PokemonService);
}
