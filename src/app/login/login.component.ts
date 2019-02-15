import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.authService.login({
      email:form.value.email,
      password:form.value.password
      
    });
    

  
  }
  
}
