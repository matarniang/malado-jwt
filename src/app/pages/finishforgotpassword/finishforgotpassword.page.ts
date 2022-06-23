import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { changePasswordRequest } from 'src/model/changePasswordRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-finishforgotpassword',
  templateUrl: './finishforgotpassword.page.html',
  styleUrls: ['./finishforgotpassword.page.scss'],
})
export class FinishforgotpasswordPage implements OnInit {
  passwordField:string
  confirmField:string
  key=localStorage.getItem('key');

  constructor(private router : Router,
    private authservice : AuthService) { }

  ngOnInit() {
  }

  finishforgotpassword(){
    this.authservice.finishforgotpassword(new changePasswordRequest('',this.passwordField,this.key)).subscribe( 
    //next en cas de success
    (data) =>{
      //Aller a la page suivante 
      console.log(data)
      this.router.navigate(['connexion'])
    },
    //  en cas error 
    (error) =>{
      // if(error.status==404){
        
      //   this.alertMsg="loginad n'existe pas dans la base"
      //   this.isAlert = true;
      // }
      // else if (error.status==500){
      //   this.alertMsg="loginad obligatoir"
      //   this.isAlert = true;
      // }
      // else{
      //   this.alertMsg="verifier votre connexion"
      //   this.isAlert = true;
      // }
      console.log(error)
    }
  )
}

  
}
