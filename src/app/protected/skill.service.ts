import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Character} from "./character";
import {Magic} from "./magic";
import {Skill} from "./skill";




@Injectable()
export class SkillService {

  skillChanged = new EventEmitter<Skill[]>();

  constructor(private http: Http) {

  }


  private skill: Skill[] = [

  ];



  fetchData() {
    return this.http.get('https://authentication-36c7c.firebaseio.com/skill.json')
      .map((response: Response) => response.json())
      .subscribe(
        data => {
          const brandArray = [];
          for(let key in data) {
            brandArray.push(data[key]);
          }
          this.skill = brandArray;
          //console.log(this.brands);
          this.skillChanged.emit(this.skill);
        }

      );
  }

  getSkillByName(name: string) {
    let count = 0;
    let selectedSkill: Skill;
    while(count < this.skill.length) {
      if(this.skill[count].skillName == name) {
        selectedSkill = this.skill[count];
      }
      count++;
    }
    return selectedSkill;
  }

  getMagicById(id: number) {
    return this.skill[id];
  }



  pushNewSkill(skill: Skill) {
    const body = JSON.stringify(skill);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://authentication-36c7c.firebaseio.com/skill.json', body, {headers: headers});
  }


}
