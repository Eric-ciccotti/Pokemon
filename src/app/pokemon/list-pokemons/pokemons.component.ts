import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
   }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    // let link = ['/pokemon', pokemon.id]
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
