import { Component, OnInit } from '@angular/core';
import {Character} from "../../character";
import {Input} from "@angular/core/src/metadata/directives";
import {CharacterService} from "../../character.service";
import {MagicService} from "../../magic.service";
import {Magic} from "../../magic";
import {SkillService} from "../../skill.service";
import {Skill} from "../../skill";
import {Stat} from "../../stat";
import {StatService} from "../../stat.service";



@Component({
  selector: 'tr[app-sixstar-item]',
  templateUrl: './sixstar-item.component.html',
  styleUrls: ['./sixstar-item.component.css']
})
export class SixstarItemComponent implements OnInit {

  @Input() character: Character;
  @Input() charID: number;
  magicIndex = '';
  statIndex = '';
  skillIndex = '';
  currentMagicArray: Magic[];
  currentSkillArray: Skill[];
  currentStatsArray: Stat[];


  constructor(private charService: CharacterService,
              private magicService: MagicService,
              private skillService: SkillService,
              private statService: StatService) { }

  ngOnInit() {


  }

  selectedCharUpdate(id: number) {
    this.charService.setSelectedCharacter(id);

  }



  testOutput(index: number) {

    this.magicIndex = index + 'magic';
    this.statIndex = index + 'stat';
    this.skillIndex = index + 'skill';

    let characterSelect = this.charService.getCharacterByIndex(index);
    let magicArray: any[] = [];
    let skillArray: any[] = [];
    let statArray: any[] = [];
    this.currentMagicArray = [];
    this.currentSkillArray = [];
    this.currentStatsArray = [];

    let count = 0;
    while(count < characterSelect.magic.length) {
      if(characterSelect.magic[count].name = this.magicService.getMagicByName(characterSelect.magic[count].name).magicName) {
        magicArray.push({
          magic: this.magicService.getMagicByName(characterSelect.magic[count].name),
          levelLearned: characterSelect.magic[count].levelLearned
        });
      }
      count++;
    }

    let count2 = 0;
    while(count2 < characterSelect.skill.length) {
      if (characterSelect.skill[count2]) {

      if (characterSelect.skill[count2].name = this.skillService.getSkillByName(characterSelect.skill[count2].name).skillName) {
        skillArray.push({
          skill: this.skillService.getSkillByName(characterSelect.skill[count2].name),
          levelLearned: characterSelect.skill[count2].levelLearned,
          starLearned: characterSelect.skill[count2].starLearned
        });
      }
    }
      count2++;
    }

    let count3 = 0;
   console.log(characterSelect.stats);
    while(count3 < 7) {
      if(characterSelect.stats[count3]) {
        statArray.push(characterSelect.stats[count3]);
      }
      count3++;

    }

    this.currentMagicArray = magicArray.sort(function(a, b) {
      return parseFloat(a.levelLearned) - parseFloat(b.levelLearned);
    });
    this.currentSkillArray = skillArray.sort(function(a, b) {
      return parseFloat(a.levelLearned) - parseFloat(b.levelLearned);
    });
    this.currentStatsArray = statArray;





  }

  starCount(starCount2: number) {

    if(starCount2 == 5) {
      return true;
    } else {
      return false;
    }

  }


}
