import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Magic} from "./magic";




@Injectable()
export class MagicService {


  magicChanged = new EventEmitter<Magic[]>();
  selectedMagicChange = new EventEmitter<Magic>();

  constructor(private http: Http) {

  }

  private magicArray: Magic[] = [];
  private selectedMagic: Magic;

  fetchData() {
    return this.http.get('https://authentication-36c7c.firebaseio.com/magic.json')
      .map((response: Response) => response.json())
      .subscribe(
        data => {
          const magicArray = [];
          for(let key in data) {
            magicArray.push(data[key]);
          }
          this.magicArray = magicArray;
          //console.log(this.brands);
          this.magicChanged.emit(this.magicArray);
        }
    );
  }

  getMagic() {
    return this.magicArray;
  }

  getSelectedMagic(id: number) {
    this.selectedMagic = this.getMagicById(id);
    //this.selectedBrandId = id;
    return this.selectedMagicChange.emit(this.selectedMagic);
  }

  getMagicByName(name: string) {
    let count = 0;
    let selectedMagic: Magic;
    while(count < this.magicArray.length) {
      if(this.magicArray[count].magicName == name) {
        selectedMagic = this.magicArray[count];
      }
      count++;
    }
    return selectedMagic;
  }

  getMagicById(id: number) {
    return this.magicArray[id];
  }



  pushNewMagic(magic: Magic) {
    const body = JSON.stringify(magic);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://authentication-36c7c.firebaseio.com/magic.json', body, {headers: headers});
  }


}
