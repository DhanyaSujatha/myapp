import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate;
  maxDate;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.minDate=new Date();
    this.minDate.setFullYear(this.minDate.getFullYear()-18);
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
  }
  onSubmit(form:NgForm) {
    this.authService.registerUser({
      email:form.value.email,
      password:form.value.password
    });
}
}
