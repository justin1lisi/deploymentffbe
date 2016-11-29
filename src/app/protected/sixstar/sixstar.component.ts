import { Component, OnInit } from '@angular/core';
import {Character} from "../character";
import {CharacterService} from "../character.service";
import {MagicService} from "../magic.service";
import {SkillService} from "../skill.service";
import {StatService} from "../stat.service";

@Component({
  selector: 'app-sixstar',
  templateUrl: './sixstar.component.html',
  styleUrls: ['./sixstar.component.css']
})
export class SixstarComponent implements OnInit {


  characters: Character[] = [];


  constructor(private charService: CharacterService, private magicService: MagicService, private skillService: SkillService, private statService: StatService) { }

  ngOnInit() {

    this.charService.fetchData();
    this.magicService.fetchData();
    this.skillService.fetchData();

    this.charService.charsChanged.subscribe(
      (characters: Character[]) => this.characters = characters
    );


  }

}
