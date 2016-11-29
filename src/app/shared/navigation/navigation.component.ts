import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.css',
    './hover.css']
})
export class NavigationComponent implements OnDestroy, OnInit {

  isAuthenticated = false;
  private subscription: Subscription;
  private mainMenu: boolean = true;
  private catalogMenu: boolean = false;
  private inventoryMenu: boolean = false;


  constructor( private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    console.log(window.location.href);
    if(window.location.href.includes('catalog')) {
      this.mainMenu = false;
      this.catalogMenu = true;

    }
  }

  isAuth() {
    return this.isAuthenticated;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  catalogNav() {
    this.mainMenu = !this.mainMenu;
    this.catalogMenu = !this.catalogMenu;
    this.inventoryMenu = false;
  }

  catalogMain() {
    this.mainMenu = true;
    this.inventoryMenu = false;
  }

  catalogInv() {
    this.mainMenu = false;
    this.catalogMenu = false;
    this.inventoryMenu = true;
  }

}
