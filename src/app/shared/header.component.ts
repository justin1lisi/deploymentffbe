import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";



@Component({
  selector: 'my-header',
  template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li routerLinkActive="active"><a [routerLink]="['signup']" >Sign Up</a></li>
                        <li routerLinkActive="active"><a [routerLink]="['signin']">Sign In</a></li>
                        <li routerLinkActive="active"><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
        
    `
})


export class HeaderComponent implements OnDestroy {

  isAuthenticated = false;
  private subscription: Subscription;


  constructor() {


  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

