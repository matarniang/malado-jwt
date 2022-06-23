import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { maladoRegisterRequest } from 'src/model/maladoRegisterRequest.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-ad',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class LoginAdPage implements OnInit {
  loginField:string
  passwordField:string
  confirmeField:string
  firstNameField=localStorage.getItem('firstNameField');
  lastNameField=localStorage.getItem('lastNameField');
  emailField=localStorage.getItem('emailField');
  langKeyField:string
  isAlert=false;
  setinterval='false';
  alertMsg="merci de derifier";
  constructor(private router : Router,
    private authservice : AuthService,
  
   ) {}

  ngOnInit() {
  }
  AuthentificationPage()
  {
   this.router.navigate(['login-ad1'])
  }
  register(){
      this.authservice.register(new maladoRegisterRequest(this.loginField,this.emailField,this.passwordField,this.firstNameField,this.lastNameField,'fr')).subscribe( 
      //next en cas de success
      (data) =>{
        //Aller a la page suivante 
        console.log("Login valide")
        console.log(data)
        localStorage.setItem('loginad',this.loginField);
        // localStorage.setItem('loginad',this.loginField);
        // localStorage.setItem('setinterval','true');
        this.router.navigate(['changepassword'])
      },
      //  en cas error 
      (error) =>{
        if(error.status==404){
          
          this.alertMsg="loginad n'existe pas dans la base"
          this.isAlert = true;
        }
        else if (error.status==500){
          this.alertMsg="loginad obligatoir"
          this.isAlert = true;
        }
        else{
          this.alertMsg="verifier votre connexion"
          this.isAlert = true;
        }
      }
    )
  }  
  }




 


