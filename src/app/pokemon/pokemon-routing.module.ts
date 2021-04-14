import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonsComponent } from './list-pokemons/pokemons.component';

const pokemonRoutes: Routes = [
  {
    path: "pokemon",
    children: [
      { path: 'all', component : PokemonsComponent},
      { path: ':id', component : DetailPokemonComponent},
      { path: 'edit/:id', component: EditPokemonComponent},
    ]
  }
];

  @NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule]
  })
  export class PokemonRoutingModule { }
