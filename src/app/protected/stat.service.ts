import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Character} from "./character";
import {Magic} from "./magic";
import {Skill} from "./skill";
import {Stat} from "./stat";




@Injectable()
export class StatService {

  statChanged = new EventEmitter<Stat[]>();

  constructor(private http: Http) {

  }


  private stat: Stat[] = [

  ];



  fetchData() {
    return this.http.get('https://authentication-36c7c.firebaseio.com/stats.json')
      .map((response: Response) => response.json())
      .subscribe(
        data => {
          const brandArray = [];
          for(let key in data) {
            brandArray.push(data[key]);
          }
          this.stat = brandArray;
          //console.log(this.brands);
          this.statChanged.emit(this.stat);
        }

      );
  }

  getStatByName(name: string) {
    let count = 0;
    let selectedStat: Stat;
    // while(count < this.stat.length) {
    //   if(this.stat[count].skillName == name) {
    //     selectedStat = this.stat[count];
    //   }
    //   count++;
    // }
    return selectedStat;
  }

  getMagicById(id: number) {
    return this.stat[id];
  }



  pushNewSkill(skill: Skill) {
    const body = JSON.stringify(skill);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://authentication-36c7c.firebaseio.com/stats.json', body, {headers: headers});
  }


}
