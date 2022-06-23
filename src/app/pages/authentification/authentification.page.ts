import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaladoRequest } from 'src/model/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class RegisterPage implements OnInit {
  loginadField:string
  passwordField:string
  donner:string
  loginad:string
  correctPassword = true;
  showPassword=true;
  passwordToggleIcon= 'eye'
  userIcon = 'person'
  isAlert=false;
  alertMsg="coucou"
  loader=false;
  
  constructor(private router: Router,
  private authservice : AuthService,) { }

  ngOnInit() {
   
    setInterval( () =>{
      if(this.isAlert==true){
        this.isAlert=false;
      }
    },10000);
  }


  togglePassword():void {
    this.showPassword =! this.showPassword;

    if (this.passwordToggleIcon=='eye'){
      this.passwordToggleIcon ='eye-off';
    }else{
      this.passwordToggleIcon='eye';
    }
  }

  

homePage()
  {
  this.router.navigate(['home'])
  }


Connexion(){
  this.authservice.connexion(new MaladoRequest('', '', '', this.passwordField, this.loginadField)).subscribe( 
    //next en cas de success
    (data)=>{
        // this.loader=true;
        // this.donner = JSON.parse(data);
        // this.donner = data;
        // console.log(this.donner);
        
        if (data.status==200) {
          //localStorage.setItem('loginad', this.loginadField);
          localStorage.setItem('token',data.body);
          // this.loginad = data.body.email;
          // this.loader=false;
          console.log(data);
          // console.log(this.loginad);
        this.router.navigate(['dashboard2'])
        }
        // else
        // this.router.navigate(['connexion'])
  
    },
    (error) =>{
      console.log(error);
      if(error.status==400){
        
        this.alertMsg="login ou mot de passe n'existe pas"
        this.isAlert = true;
      }
      else if (error.status==500){
        this.alertMsg="loginad et mot de passe obligatoir"
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



