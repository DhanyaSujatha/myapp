import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'user.model';
import { UserAuth } from './userauth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange= new Subject<boolean>();
    private user:User;

  constructor(private router:Router) { }

registerUser(authdata: UserAuth){
  this.user= {
      email:authdata.email,
      userID:Math.round(Math.random()*10000).toString()
  };
  this.authSuccessfully();
  this.router.navigate(['/home']);
      }
      login(authdata:UserAuth) {
          this.user= {
              email:authdata.email,
              userID:Math.round(Math.random()*10000).toString()
          }; 
      this.authSuccessfully();
          this.router.navigate(['/home']);
      }
      logout() {
          this.user=null;
          this.authChange.next(false);
          this.router.navigate(['/login']);
      }
     
      getUser() {
          return {...this.user};
      }
      isAuth() {
          return this.user!=null;
      }
      authSuccessfully(){
          this.authChange.next(true);
      }
  }
