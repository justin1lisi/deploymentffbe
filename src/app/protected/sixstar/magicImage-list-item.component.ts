import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Magic} from "../magic";
import {MagicService} from "../magic.service";

@Component({
  selector: 'app-magicImage-list-item',
  template: `
      <li class="dropdown" value="{{magicId}}" style="margin-top:8px;"><a (click)="onSelectMagicItem(magicId)" style="cursor: pointer;"><img src="{{magic.magicImage}}" alt=""></a></li>

  `,
  styles: [`

`]
})
export class MagicImageListItemComponent implements OnInit {

  @Input() magic: Magic;
  @Input() magicId: number;

  constructor(private magicService: MagicService) { }

  ngOnInit() {

  }

  onSelectMagicItem(id: number) {
     this.magicService.getSelectedMagic(id);
  }

}
