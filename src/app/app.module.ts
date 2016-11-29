import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {routing} from "./app.routes";
import { NavigationComponent } from './shared/navigation/navigation.component';
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import { BannerComponent } from './banner.component';
import {BannerService} from "../banner-service";
import {TreeModule} from "angular2-tree-component";
import {DropdownModule} from "ng2-dropdown";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import { SixstarComponent } from './protected/sixstar/sixstar.component';
import { SixstarCreateComponent } from './protected/sixstar/sixstar-create/sixstar-create.component';
import {CharacterService} from "./protected/character.service";
import { SixstarItemComponent } from './protected/sixstar/sixstar-item/sixstar-item.component';
import {MagicService} from "./protected/magic.service";
import { SixstarSkillPageComponent } from './protected/sixstar/sixstar-skill-page/sixstar-skill-page.component';
import {SkillService} from "./protected/skill.service";
import {TooltipModule} from "ng2-tooltip/index";
import {StatService} from "./protected/stat.service";
import {MagicImageListItemComponent} from "./protected/sixstar/magicImage-list-item.component";
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    SixstarComponent,
    SixstarCreateComponent,
    SixstarItemComponent,
    SixstarSkillPageComponent,
    MagicImageListItemComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    BootstrapModalModule,
    TreeModule,
    DropdownModule,
    Ng2Bs3ModalModule,
    DragulaModule,
    FormsModule,
    TooltipModule,
    MultiselectDropdownModule


  ],
  providers: [BannerService, CharacterService, MagicService, SkillService, StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
