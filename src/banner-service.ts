import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class BannerService {
  mainLink: string;
  secondLink: string;
  thirdLink: string;
  changedLinks = new EventEmitter<string[]>();

  updateBanner(main: string, second: string, third: string) {
      this.mainLink = main;
      this.secondLink = second;
      this.thirdLink = third;
      this.changedLinks.emit([this.mainLink, this.secondLink, this.thirdLink]);
  }


}
