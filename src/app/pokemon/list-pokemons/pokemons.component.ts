import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';


@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  //https://blog.angulartraining.com/dynamic-filtering-with-rxjs-and-angular-forms-a-tutorial-6daa3c44076a


  pokemons: Pokemon[] = [];
  pokemons$ = this.pokemonService.getPokemons();

  filter: FormControl;
  filter$: Observable<string>
  filteredPokemon$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredPokemon$ = combineLatest([this.pokemons$, this.filter$])
    .pipe(
      tap((_)=>console.log('COMBINED', _)
      ),
      map(([pokemons, filterString]) => pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
   }

   addPokemon() {
     this.router.navigate(['pokemon/add'])
   }



  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    // let link = ['/pokemon', pokemon.id]
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
