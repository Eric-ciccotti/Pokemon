import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { PokemonAuthService } from '../pokemonAuth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService, private pokemonAuth: PokemonAuthService) { }

  login(): void {
    this.pokemonAuth.loginWithRedirect();
  }

  logout(): void {
    this.pokemonAuth.logout();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

}
