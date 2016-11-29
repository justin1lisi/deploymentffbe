import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Character} from "./character";




@Injectable()
export class CharacterService {

  charsChanged = new EventEmitter<Character[]>();
  selectedCharacter: Character;

  constructor(private http: Http) {

  }


  private characters: Character[] = [

  ];

  setSelectedCharacter(id: number) {
    let count = 0;

    while(count < this.characters.length) {
      if(count == id) {
        this.selectedCharacter = this.characters[count];
      }
      count++;
    }

  }

  getSelectedCharacter() {
    return this.selectedCharacter;
  }

  getCharacterByIndex(index: number) {
    return this.characters[index];
  }


  fetchData() {
    return this.http.get('https://authentication-36c7c.firebaseio.com/6stars.json')
      .map((response: Response) => response.json())
      .subscribe(
        data => {
          const brandArray = [];
          for(let key in data) {
            brandArray.push(data[key]);
          }
          this.characters = brandArray;
          //console.log(this.brands);
          this.charsChanged.emit(this.characters);
        }

      );
  }



  getCharacterById(id: number) {
    return this.characters[id];
  }

  getCharacterByName(name: string) {
    let count = 0;
    let characterSelected: Character;
    while(count < this.characters.length) {
      if(this.characters[count].charName == name) {
        characterSelected = this.characters[count];
      }
      count++;
    }
    return characterSelected;
  }

  replaceAndPutChar(character: Character, newCharacter: Character) {
    this.characters[this.characters.indexOf(character)] = newCharacter;
    this.putCharacter(this.characters).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }


  putCharacter(character: Character[]) {
    const body = JSON.stringify(character);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://authentication-36c7c.firebaseio.com/6stars.json', body, {headers: headers});
  }



  pushNewCharacter(character: Character) {
    const body = JSON.stringify(character);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://authentication-36c7c.firebaseio.com/6stars.json', body, {headers: headers});
  }

  // pushNewBrand(id: number, name: string, desc: string) {
  //   const body = JSON.stringify(new Character(id, name, desc, true));
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post('https://authentication-36c7c.firebaseio.com/brands.json', body, {headers: headers});
  // }


}
