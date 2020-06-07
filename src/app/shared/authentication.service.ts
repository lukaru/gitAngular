import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";
import {HttpClient} from "@angular/common/http";
import * as decode from 'jwt-decode';
import {retry} from 'rxjs/operators';

interface User {
  result: {
    created_at: Date,
    email: string,
    id: number,
    name: string,
    is_helper: boolean,
    updated_at: Date
  }
}
@Injectable()
export class AuthService {
  private api:string =
      'http://coronaneu.s1710456008.student.kwmhgb.at/api/auth';
  constructor(private http: HttpClient) {
  }
  login(email: string, password: string ) {
    return this.http.post(`${this.api}/login`, {'email': email,
      'password': password});
  }
  public setCurrentUserId(){
    this.http.get<User>(`${this.api}/user`).pipe(retry(3)).subscribe(res =>{
          localStorage.setItem('userId', res.result.id.toString());
        }
    );
  }
  public getCurrentUserId(){
    return Number.parseInt(localStorage.getItem('userId'));
  }
  public setLocalStorage(token: string) {
    console.log("Storing token");
    console.log(token);
    const decodedToken = decode(token);
    console.log(decodedToken);
    console.log(decodedToken.user.id);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', decodedToken.user.id);
    localStorage.setItem('name', decodedToken.name);
    localStorage.setItem('is_helper', decodedToken.is_helper);
  }
  logout() {
    this.http.post(`${this.api}/logout`, {});
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    console.log("logged out");
  }
  public isLoggedIn() {
    if(!isNullOrUndefined(localStorage.getItem("token"))){
      let token : string = localStorage.getItem("token");
      // console.log(token);   //  only needed to check token if not work else spam
      const decodedToken = decode(token);
      let expirationDate:Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if(expirationDate < new Date()){
        console.log("token expired");
        localStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}