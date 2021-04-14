import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  pokemons : Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
   }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    //Récupère un pokemon par son id
    this.pokemon = this.pokemonService.getPokemon(id);
  }


  goEdit(pokemon: Pokemon) {
    let link = ['/pokemon/edit', this.pokemon.id];
    this.router.navigate(link);
  }
}
