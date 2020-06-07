import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "../shared/authentication.service";
import { ShoppingListService } from "../shared/shopping-list.service";

interface Response {
  response: string;
  result: {
    token: string;
  };
}
@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user = localStorage.userId;
  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService,
              private shoppingListService: ShoppingListService ) { }
  ngOnInit() {
        this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  login() {
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(res =>
      {
        const resObj = res as Response;
        if (resObj.response === "success") {
          this.authService.setLocalStorage(resObj.result.token);
          this.router.navigateByUrl('/');
        }
      });
    }
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout();
  }
  userType(){
    if (this.user >= 3) {
      this.user = '(Hilfesuchender) - ID:' + this.user;
    } else {
      this.user = '(Helfer) - ID:' + this.user;
    }
    return this.user;
  }
  // getUser(){
  //   const params = localStorage.userId;
  //   console.log(params);
  //   this.shoppingListService.getUser(params['id']).subscribe(user => console.log(user));
  // }
}
