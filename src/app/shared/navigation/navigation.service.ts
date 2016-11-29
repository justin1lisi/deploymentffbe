import {Injectable} from "@angular/core";

@Injectable()
export class NavigationService {
  mainMenu: boolean;
  catalogMenu: boolean;


  updateBanner(main: boolean, second: boolean) {
    this.mainMenu = main;
    this.catalogMenu = second;

  }


}
