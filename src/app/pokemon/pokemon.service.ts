import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private router: Router) {}

  /**
   * @description retourne la liste des pokemons
   */
  getPokemons(): Pokemon[] {
    return LISTPOKEMONS;
  }

   /**
   * @description retourne un pokemon via son id
   */
  //  getPokemon(id: number) {
  //    let pokemons = this.getPokemons();
  //    console.log('yes');
  //   return pokemons.find((element) => element.id === id);
  //  }

   /**
   * @description retourne un pokemon via son id
   */
  getPokemon(id: number) {
    let pokemons = this.getPokemons();
    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }

  goBack(id?: number) {
      let pokemon = this.getPokemon(id);
      let link = id ? ['/pokemon', pokemon.id] : ['/pokemon/all'];
      this.router.navigate(link);
    }

  getPokemonsTypes(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'spectre',
    ];
  }
}
