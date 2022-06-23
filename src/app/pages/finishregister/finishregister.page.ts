import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ad1',
  templateUrl: './finishregister.page.html',
  styleUrls: ['./finishregister.page.scss'],
})
export class LoginAd1Page implements OnInit {

  emailField:string
  firstNameField:string
  lastNameField:string
  constructor(private router : Router) { }

  ngOnInit() {
  }
  register(){
    localStorage.setItem('emailField',this.emailField);
    localStorage.setItem('firstNameField',this.firstNameField);
    localStorage.setItem('lastNameField',this.lastNameField);
    this.router.navigate(['login-ad'])
  }
  AuthentificationPage(){
    this.router.navigate(['connexion'])
  }

}
