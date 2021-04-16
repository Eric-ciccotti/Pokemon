import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  uniqueId = Math.random();

  pokemon: any = {
    id: this.uniqueId,
    name: '',
    hp: '',
    cp: '',
    picture: "",
    types: [],
    created: new Date()
  }

  src: any = null;

  constructor() {
   }

  ngOnInit(): void {
  }

  onImgError($event){
    $event.target.src = 'https://images-na.ssl-images-amazon.com/images/I/51sGFjgn2VL._AC_SX450_.jpg';
  }




}
