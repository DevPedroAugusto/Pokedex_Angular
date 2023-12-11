import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonDetails(pokemonId: number): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${pokemonId}`;
    return this.http.get(url);
  }
}
