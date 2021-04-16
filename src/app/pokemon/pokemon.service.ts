import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  isEditMode: Subject<boolean> = null;

  pokemon : any = null;
  private pokemonUrl = 'api/pokemons';

  constructor(private router: Router, private http: HttpClient) {}

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T){
    return (error:any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }

  /**
   * @type Observable<Pokemon[]>
   * @description retourne la liste des pokemons
   */
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_ => this.log('fetched pokemons')),
      catchError(this.handleError('getPokemons', []))
    )
  }

  // addPokmeon(Pokemon: Pokemon): Observable<Pokemon>{
  //   const newPokmeon = {      id: 12,
  //     name: "Groupix",
  //     hp: 17,
  //     cp: 8,
  //     picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
  //     types: ["Feu"],
  //     created: new Date()}


  //   return this.http.post<Pokemon>(this.pokemonUrl, pokemon).pipe(
  //     tap(_ => this.log('fetched pokemons')),
  //     catchError(this.handleError('getPokemons', []))
  //   )
  // }


   /**
   * @description retourne un pokemon via son id
   */
  getPokemon(id: number): Observable<Pokemon>{
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id= ${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
  }

    /**
   * @description met à jour un pokemon
   */
  updatePokemon(pokemon: Pokemon) : Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type' : 'application/json'})
    }

    return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`update pokemon error`))
    )
  }

  /**
   * @description supprimer un pokemon
   */
  deletePokemon(pokemon: Pokemon) : Observable<any> {
    const url = `${this.pokemonUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-type' : 'application/json'})
    }

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`update pokemon error`))
    )
  }

  goBack(pokemon?: Pokemon) {
      let link = pokemon ? ['/pokemon', pokemon.id] : ['/pokemon/all'];
      this.router.navigate(link);
    }

    // changeImage(pokemon: Pokmeon): Observable<any> {
    //   let newUrl =
    // }

  getPokemonsTypes(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'spectre',
    ];
  }
}
