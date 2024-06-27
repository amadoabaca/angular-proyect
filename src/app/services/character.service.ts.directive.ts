import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/');
  }

  getCharactersByGender(gender: string) {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/?gender=${gender}`);
  }

  getEarthCharacters() {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/?origin=Earth`);
  }
}
