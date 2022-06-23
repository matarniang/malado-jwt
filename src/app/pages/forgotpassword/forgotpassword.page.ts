import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { changePasswordRequest } from 'src/model/changePasswordRequest.model';
import { AlertController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  emailField:string
  isAlert=false;
  alertMsg="merci de derifier"
  
  constructor(private router : Router,
    private authservice : AuthService,
    private alertCtrl : AlertController

   ) {}

  ngOnInit() {

  }

  AuthentificationPage()
  {
   this.router.navigate(['connexion'])
  }
  
  forgotpassword(){
      this.authservice.forgotpassword(new changePasswordRequest(this.emailField,'','')).subscribe( 
      //next en cas de success
      (data) =>{
        //Aller a la page suivante 
        console.log(data)
        this.keyPopper(); 
      },
      //  en cas error 
      (error) =>{
        console.log(error)
      }
    )
  }  



  async keyPopper() {
    await this.alertCtrl.create({
   
       header:"Code de verification ",
       cssClass: 'alertDanger',
       subHeader:"",
       message:"<small> Saisir votre code</small>",
       inputs: [
         {
           name: 'key',
           placeholder: 'code de verification',
           type: 'text',  
         }
       ],
       
       buttons: [
         {
           text: 'annuler',
           role: 'cancel',
           handler: data => {
             console.log('demande annuler');
           }
         },
         {
           text: 'soumettre',
           handler: data => {
            localStorage.setItem('key',data.key);
             this.authservice.verificationKey(new changePasswordRequest('','',data.key)).subscribe( 
               (data) =>{
                 console.log(data)
                //  this.alertMsg="Votre demande a ete bien enregistrer merci"
                //  this.isAlertSuccess = true; 
                this.router.navigate(['finishforgotpassword'])

               },
               (error) =>{
                 console.log(error)
                   this.alertMsg="verifier votre connexion"
                  //  this.isAlertDanger = true;
               }
             )
           }
         }
       ]
     }).then(data => data.present());
   }
   
}
