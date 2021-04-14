import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  pokemons : Pokemon[];
  pokemon: any = null;
  src: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
   }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.pokemonService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
  }

  onImgError($event){
    $event.target.src = 'https://www.pokepedia.fr/images/e/e2/Pok%C3%A9_Ball-RS.png';
  }




}
