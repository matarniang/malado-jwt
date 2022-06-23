import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DemandeRequest } from 'src/model/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
export type EntityResponseType = HttpResponse<DemandeRequest>;

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {
  isAlertDanger=false;
  isAlertSuccess=false;
  alertMsg="";
  loginad=localStorage.getItem('loginad');
  public menustatus: boolean;
  constructor(private router: Router,
    private authservice : AuthService,
    private menu: MenuController, 
    private alertCtrl : AlertController
    ) { }
  ngOnInit() {
    // setInterval( () =>{
      this.loginad;
    // },1000);
    setInterval( () =>{
      if((this.isAlertDanger==true )||(this.isAlertSuccess==true)){
        this.isAlertDanger=false;
        this.isAlertSuccess=false;
      }
    },10000);
  }

  openCustom() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }
  closeCupstom(){
    this.menu.close('main-menu');
  }

  settings
  windowsPage(){
    this.router.navigate(['windows'])
  }
  setting(){
    this.router.navigate(['settings'])
  }
  nessicoPage(){
    this.router.navigate(['nessico'])
  }
  assistance(){
    this.router.navigate(['assistance'])
  }
  historique(){
    this.router.navigate(['historique'])
  }

  oraclePage(){
    this.router.navigate(['oracle'])
  }

  gaiaPage(){
    this.router.navigate(['gaia'])
  }
  
  Comptewindows(){
    this.router.navigate(['comptewindows'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  simplissimoPage()
  {
	  this.router.navigate(['simplissimo'])
  }

  AuthentificationPage(){
    this.router.navigate(['connexion'])
  }

async OraclePopper(application:string,action:string,status:string,message:string,messageAlert:string) {
 await this.alertCtrl.create({

    header:"Compte "+application,
    cssClass: 'alertDanger',
    subHeader:"",
    message:"<small>"+messageAlert+"</small>",
    inputs: [
      {
        name: 'password',
        placeholder: 'mot de passe',
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
          this.authservice.demandeOracle(new DemandeRequest(application,data.password,action,status,message,this.loginad)).subscribe( 
            (data) =>{
              console.log(data)
              this.alertMsg="Votre demande a ete bien enregistrer merci"
              this.isAlertSuccess = true;     
            },
            (error) =>{
              console.log(error)
                this.alertMsg="verifier votre connexion"
                this.isAlertDanger = true;
            }
          )
        }
      }
    ]
  }).then(data => data.present());
}


async WindowsPopper(application:string,action:string,status:string,message:string,messageAlert:string) {
  await this.alertCtrl.create({
 
     header:"Compte "+application,
     cssClass: 'alertDanger',
     subHeader:"",
     message:"<small>"+messageAlert+"</small>",
     inputs: [
       {
         name: 'password',
         placeholder: 'mot de passe',
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
           this.authservice.demandeWindows(new DemandeRequest(application,data.password,action,status,message,this.loginad)).subscribe( 
             (data) =>{
               console.log(data)
               this.alertMsg="Votre demande a ete bien enregistrer merci"
               this.isAlertSuccess = true;     
             },
             (error) =>{
               console.log(error)
                 this.alertMsg="verifier votre connexion"
                 this.isAlertDanger = true;
             }
           )
         }
       }
     ]
   }).then(data => data.present());
 }



 async NessicoPopper(application:string,action:string,status:string,message:string,messageAlert:string) {
  await this.alertCtrl.create({
 
     header:"Compte "+application,
     cssClass: 'alertDanger',
     subHeader:"",
     message:"<small>"+messageAlert+"</small>",
     inputs: [
       {
         name: 'password',
         placeholder: 'mot de passe',
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
           this.authservice.demandeNessico(new DemandeRequest(application,data.password,action,status,message,this.loginad)).subscribe( 
             (data) =>{
               console.log(data)
               this.alertMsg="Votre demande a ete bien enregistrer merci"
               this.isAlertSuccess = true;     
             },
             (error) =>{
               console.log(error)
                 this.alertMsg="verifier votre connexion"
                 this.isAlertDanger = true;
             }
           )
         }
       }
     ]
   }).then(data => data.present());
 }






}
