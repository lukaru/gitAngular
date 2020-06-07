import { Component } from '@angular/core';
import {Shoppinglist} from "./shared/shoppinglist";
import { AuthService } from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kwmcorona';

  listOn = true;
  detailsOn = false;

  shoppingList: Shoppinglist;

  constructor(
      private authService: AuthService
  ) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isHelper() {
      if (localStorage.userId <= 2) {
        return true;
      } else {
        return false;
      }
      // if(localStorage.is_helper == 1){
      //   return;
      // }
  }

  isHelped() {
    if (localStorage.userId > 2) {
      return true;
    } else {
      return false;
    }
    // if(localStorage.is_helper == 0){
    //   return;
    // }
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }
}
