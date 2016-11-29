import { Component, OnInit } from '@angular/core';
import {MagicService} from "../../magic.service";
import {CharacterService} from "../../character.service";
import {Magic} from "../../magic";
import {SkillService} from "../../skill.service";
import {Skill} from "../../skill";
import {Input} from "@angular/core/src/metadata/directives";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {Character} from "../../character";

@Component({
  selector: 'app-sixstar-create',
  templateUrl: './sixstar-create.component.html',
  styleUrls: ['./sixstar-create.component.css']
})
export class SixstarCreateComponent implements OnInit {

  @Input() selectedMagicImage: string = 'Select an Image..';


  private selectedOptions: number[];
  private myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  magicArray: Magic[] = [];

  charCreation: FormGroup;
  magicCreation: FormGroup;
  skillCreation: FormGroup;
  skillAddToChar: FormGroup;
  magicAddToChar: FormGroup;

  magicImagesArray: any[] = [];

  selectedMagic: Magic;

  constructor(private charService: CharacterService, private magicService: MagicService, private skillService: SkillService, private fb: FormBuilder) { }

  ngOnInit() {

    //this.createCharacter2();



    this.charCreation = this.fb.group({
      charName: ['', Validators.required],
      charImage: [''],
      charRank: [''],
      charStars: [''],
      charRole: [''],
      axeUse: [],
      bowUse: [],
      daggerUse: [],
      fistsUse: [],
      greatSwordUse: [],
      gunUse: [],
      hammerUse: [],
      harpUse: [],
      katanaUse: [],
      maceUse: [],
      rodUse: [],
      spearUse: [],
      staveUse: [],
      swordUse: [],
      throwingUse: [],
      whipUse: [],
      magicChar: [''],
      skillChar: [''],
      tReward: [''],
      tRewardType: [''],
      burst: [''],
      levelLearnedSkill: [''],
      levelLearnedMagic: ['']



    });

    this.magicCreation = this.fb.group({
      magicImage: ['', Validators.required],
      magicName: [''],
      magicDesc: [''],
      magicMP: [''],
      magicEquip: [''],
      magicMateria: ['']
    });

    this.skillCreation = this.fb.group({
      skillImage: ['', Validators.required],
      skillName: [''],
      skillDesc: [''],
      skillMP: [''],
      skillEquip: [''],
      skillMateria: ['']
    });

    this.skillAddToChar = this.fb.group({
      skillToAddName: ['', Validators.required],
      charAddToName: [''],
      levelLearned: [''],
      starLearned: [''],
    });

    this.magicAddToChar = this.fb.group({
      magicToAddName: ['', Validators.required],
      charAddToNameMagic: [''],
      levelLearnedMagicAdd: [''],
      starLearnedMagic: [''],
    });

    this.charService.fetchData();
    this.magicService.fetchData();
    this.skillService.fetchData();

    this.magicService.magicChanged.subscribe(
      (characters: Magic[]) => {
        this.magicArray = characters;
        let countImages = 0;
        while(countImages < characters.length) {
          this.magicImagesArray.push(characters[countImages].magicImage);
          countImages++;
        }
      }
    );

    this.magicService.selectedMagicChange.subscribe(
      (magicI: Magic) => {
        this.selectedMagicImage = magicI.magicImage;
        this.selectedMagic = magicI;
      }
    );


  }



  onChange($event) {
    console.log($event);
  }

  createCharacter() {

    let newCharacter = new Character(
    this.charCreation.controls['charName'].value,
      this.charCreation.controls['charImage'].value,
    this.charCreation.controls['charRank'].value,
    this.charCreation.controls['charStars'].value,
    this.charCreation.controls['charRole'].value,
      this.charCreation.controls['burst'].value,
      this.charCreation.controls['daggerUse'].value,
      this.charCreation.controls['swordUse'].value,
      this.charCreation.controls['greatSwordUse'].value,
      this.charCreation.controls['katanaUse'].value,
      this.charCreation.controls['staveUse'].value,
      this.charCreation.controls['rodUse'].value,
      this.charCreation.controls['bowUse'].value,
      this.charCreation.controls['axeUse'].value,
      this.charCreation.controls['hammerUse'].value,
      this.charCreation.controls['spearUse'].value,
      this.charCreation.controls['harpUse'].value,
      this.charCreation.controls['whipUse'].value,
      this.charCreation.controls['throwingUse'].value,
      this.charCreation.controls['gunUse'].value,
      this.charCreation.controls['maceUse'].value,
      this.charCreation.controls['fistsUse'].value,
      this.charCreation.controls['tReward'].value,
      this.charCreation.controls['tRewardType'].value,
      [{
        name: this.charCreation.controls['magicChar'].value,
        levelLearned: this.charCreation.controls['levelLearnedMagic'].value}],
      [{
        name: this.charCreation.controls['skillChar'].value,
        levelLearned: this.charCreation.controls['levelLearnedSkill'].value,
        starLearned: '5'}],

      [

        {
          attack: '',
          attackAdd: '',
          defense: '',
          defenseAdd: '',
          hp: '',
          hpAdd: '',
          magStat: '',
          magicAdd: '',
          maxLevel: '',
          mp: '',
          mpAdd: '',
          spirit: '',
          spiritAdd: '',
          stars: ''
        },

        {
          attack: '',
          attackAdd: '',
          defense: '',
          defenseAdd: '',
          hp: '',
          hpAdd: '',
          magStat: '',
          magicAdd: '',
          maxLevel: '',
          mp: '',
          mpAdd: '',
          spirit: '',
          spiritAdd: '',
          stars: ''
        },

        {
                attack: '',
                attackAdd: '',
                defense: '',
                defenseAdd: '',
                hp: '',
                hpAdd: '',
                magStat: '',
                magicAdd: '',
                maxLevel: '',
                mp: '',
                mpAdd: '',
                spirit: '',
                spiritAdd: '',
                stars: ''
        }

      ]
    );

    this.charService.pushNewCharacter(newCharacter).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

  }


  createMagic() {
      let magic = new Magic(
        this.magicCreation.controls['magicImage'].value,
        this.magicCreation.controls['magicName'].value,
        this.magicCreation.controls['magicDesc'].value,
        this.magicCreation.controls['magicMP'].value,
        this.magicCreation.controls['magicEquip'].value,
        this.magicCreation.controls['magicMateria'].value

      );
      this.magicService.pushNewMagic(magic).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  logMagic() {
    console.log(this.magicArray);
  }

  addSkillToChar() {

    let characterName = this.skillAddToChar.controls['charAddToName'].value;
    let characterSelect = this.charService.getCharacterByName(characterName);

    characterSelect.skill.push({
      name: this.skillAddToChar.controls['skillToAddName'].value,
      levelLearned: this.skillAddToChar.controls['levelLearned'].value,
      starLearned: this.skillAddToChar.controls['starLearned'].value
  }
    );

    this.charService.replaceAndPutChar(characterSelect, characterSelect);
  }

  addMagicToChar() {

    let characterName = this.magicAddToChar.controls['charAddToNameMagic'].value;
    let characterSelect = this.charService.getCharacterByName(characterName);

    characterSelect.magic.push({
        name: this.magicAddToChar.controls['magicToAddName'].value,
        levelLearned: this.magicAddToChar.controls['levelLearnedMagicAdd'].value,
        starLearned: this.magicAddToChar.controls['starLearnedMagic'].value
      }
    );

    this.charService.replaceAndPutChar(characterSelect, characterSelect);
  }

  createSkill() {
    let skill = new Skill(
      this.skillCreation.controls['skillImage'].value,
      this.skillCreation.controls['skillName'].value,
      this.skillCreation.controls['skillDesc'].value,
      this.skillCreation.controls['skillMP'].value,
      this.skillCreation.controls['skillEquip'].value,
      this.skillCreation.controls['skillMateria'].value

    );
    this.skillService.pushNewSkill(skill).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
