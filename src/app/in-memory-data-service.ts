import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LISTPOKEMONS } from './pokemon/donnees-pokemons/mock-pokemons';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pokemons = LISTPOKEMONS;
    return { pokemons };
  }
}
