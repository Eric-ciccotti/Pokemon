import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})

export class PokemonAuthService {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document, private router: Router) { }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect().subscribe(() => this.router.navigate(['pokemon/all']))
  }

  SignUpWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
