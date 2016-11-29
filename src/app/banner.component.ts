import { Component, OnInit } from '@angular/core';
import {BannerService} from "../banner-service";


@Component({
  selector: 'app-banner',
  template: `
  <div class="col-md-12 indexTest" style="background:#fff; width:100%; height:50px; padding:8px">
    <h4 *ngIf="thirdLink != ''" style="margin-left:15px;"><span style="color:#798C9C"><i style="margin-right:8px;" class="fa fa-bookmark" aria-hidden="true"></i>{{mainLink}} - <a style="color:#798C9C" [routerLink]="['suppliers']">{{secondLink}}</a> - </span> {{thirdLink}}</h4>
    <h4 *ngIf="thirdLink == ''" style="margin-left:15px;"><span style="color:#798C9C"><i style="margin-right:8px;" class="fa fa-bookmark" aria-hidden="true"></i>{{mainLink}} -</span> <a [routerLink]="['suppliers']">{{secondLink}}</a></h4>
  </div>
  `,
  styles: [
    `
.indexTest {
z-index: 999;
}
`
  ]
})
export class BannerComponent implements OnInit {

  private mainLink: string;
  private secondLink: string;
  private thirdLink: string = '';

  constructor(private bannerServer: BannerService) {
    this.mainLink = this.bannerServer.mainLink;
    this.secondLink = this.bannerServer.secondLink;
    this.thirdLink = this.bannerServer.thirdLink;

  }

  ngOnInit() {
    this.bannerServer.changedLinks.subscribe(
      (links: string[]) => {
        this.mainLink = links[0];
        this.secondLink = links[1];
        this.thirdLink = links[2];
      }
    );


  }

}
