import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './services/character.service.ts.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rickmorty-app';
  allCharacters: any[] = [];
  maleCharacters: any[] = [];
  femaleCharacters: any[] = [];
  earthCharacters: any[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getAllCharacters();
    this.getCharactersByGender('male');
    this.getCharactersByGender('female');
    this.getEarthCharacters();
  }

  getAllCharacters() {
    this.characterService.getAllCharacters()
      .subscribe(response => {
        this.allCharacters = response.results;
      });
  }

  getCharactersByGender(gender: string) {
    this.characterService.getCharactersByGender(gender)
      .subscribe(response => {
        if (gender === 'male') {
          this.maleCharacters = response.results;
        } else {
          this.femaleCharacters = response.results;
        }
      });
  }

  getEarthCharacters() {
    this.characterService.getEarthCharacters()
      .subscribe(response => {
        this.earthCharacters = response.results;
      });
  }

}
