import { Component, OnInit } from '@angular/core';
import {Character} from "../../character";
import {Input} from "@angular/core/src/metadata/directives";
import {CharacterService} from "../../character.service";

@Component({
  selector: 'app-sixstar-skill-page',
  templateUrl: './sixstar-skill-page.component.html',
  styleUrls: ['./sixstar-skill-page.component.css']
})
export class SixstarSkillPageComponent implements OnInit {

  constructor(private charService: CharacterService) { }

  @Input() character: Character;

  ngOnInit() {
    
  }

}
