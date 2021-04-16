import { Component, OnInit } from '@angular/core';
import { PokemonAuthService } from '../pokemonAuth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonUri: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png';

  constructor(private pokemonAuth: PokemonAuthService) { }

  login(): void {
    this.pokemonAuth.loginWithRedirect();
  }

  ngOnInit(): void {
  }

}
