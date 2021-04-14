import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon/form-pokemon.component';

import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DetailPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent
  ],
  imports: [
    PokemonRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonModule { }
