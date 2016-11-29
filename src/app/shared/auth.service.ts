import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs/Rx";

declare var firebase: any;

@Injectable()

export class AuthService {

  constructor(private router: Router) {}

  signupUser(user: User) {

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
    this.router.navigate(['/protected']);
  }

  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signedOut')
    }, function(error) {
      console.log(error);
    });
    this.router.navigate(['']);
  }

  isAuthenticated(): Observable<boolean> {

    const subject = new Subject<boolean>();

    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

}
