import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { maladoRegisterRequest } from 'src/model/maladoRegisterRequest.model';

import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-changepassword',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  confirmdField=''
  passwordChamp=''
  isActivated=false;
  isFirstConnection = true;
  loginad=localStorage.getItem('loginad');
  token=localStorage.getItem('token')
  loginField:string
  hasPassword = true;
  seinterval;
  showPassword= false;
  passwordToggleIcon= 'eye'
  userIcon = 'person'

// timer variable
time: BehaviorSubject<string> = new BehaviorSubject('00:00');
percent: BehaviorSubject<number> = new BehaviorSubject(100);
timer: number; // in seconds
interval;
startduration = 5;
circleR = circleR ;
circleDasharray = circleDasharray ;
state: 'start' | 'stop' = 'stop';
 
  constructor(private router: Router,
     private alerteCtrl: AlertController,
     private authservice: AuthService,
     public alertController : AlertController
      ) { }
  
      togglePassword():void {
        this.showPassword =! this.showPassword;
    
        if (this.passwordToggleIcon=='eye'){
          this.passwordToggleIcon ='eye-off';
        }else{
          this.passwordToggleIcon='eye';
        }
      }
     

  dashboardPage()
  {
   this.router.navigate(['dashboard'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  loginPage()
  {
	   this.router.navigate(['login-ad'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }

  ngOnInit() {
    this.isEnabled(enabled => {
       if (this.isActivated){  
         //le compte est activé
        //  //this.stopTimer();
        // this.checkConnection(hasPassword => {
        //   if (hasPassword) {
        //     // il a déja un mot de passe
        //     this.router.navigate(['connexion'])

        //   } else {
        //     // il n'a pas encore de mot de passe.
        //     this.router.navigate(['changepassword'])
        //   }
        this.router.navigate(['dashboard2']);

       } else {
         // il n'a pas encore validé son compte et/ou son lien a expiré
         // vérifier si le token is toujours actif.
          this.startTimer(1);
          this.seinterval=setInterval(() => {
            this.isEnabled(enabled =>{
              if (this.isActivated){
                clearInterval(this.seinterval);
                this.stopTimer();
                  this.router.navigate(['connexion']);
                //le compte vient d'être activé
                // this.hasPassword = false;

              }
            })
          },1000); 
       }
    })
      
  }


  //  checkConnection(cb) {
  //   this.authservice.passwordVerification(new maladoRegisterRequest(this.loginad,'', '', '')).subscribe( 
  //     (data)=>{
  //       this.hasPassword = data === 'true' ? true : false;
  //       return cb(data === 'true' ? true : false)
  //     }
  //   )
  // }

  isEnabled(cb) {
      this.authservice.isEnabled(new maladoRegisterRequest(this.loginad,'', '', '')).subscribe( 
      (data) => {
        
        data = JSON.parse(data.body)
        this.isActivated = data['activated'] === true ? true : false;
        cb(this.isActivated)
      })
   }

  //  confirmpassword(){
  //     this.authservice.confirmpassword(new MaladoRequest('', '','',this.passwordChamp,this.loginad)).subscribe(
  //       (data) =>{
  //         console.log(data)
  //         localStorage.setItem('loginAd', this.loginad)
  //         this.router.navigate(['dashboard2'])
          
  //       },
  //       (error) =>{
  //         console.log("erreur password")
  //         console.log(error.message)
  //       }
          
  //     )
  //  }


startTimer(duration: number){
  this.state = 'start'; 
  clearInterval(this.interval);
  this.timer = duration*300;
  this.updatetimeValue();
  this.interval=setInterval( () =>{
    this.updatetimeValue();
  },5000);
}

stopTimer(){
  clearInterval(this.interval);
  this.time.next('00:00');
  this.state = 'stop';

}

percentageOffset(percent){
  const percentFloat = percent / 100;
  return circleDasharray * (1-percentFloat);

}


updatetimeValue(){
  let minutes: any = this.timer / 60;
  let secondes:any = this.timer % 60;
  minutes=String('0'+ Math.floor(minutes)).slice(-2);
  secondes=String('0'+ Math.floor(secondes)).slice(-2);

  const text = minutes + ':' + secondes;
  this.time.next(text);

  const totalTime = this.startduration * 60;
  const percentage = ((totalTime-this.timer)/totalTime) * 100;
  this.percent.next(percentage)

  --this.timer;
  if(this.timer<0){
    if(!this.isActivated){
      this.stopTimer();
      this.router.navigate(['login-ad'])
    }
    //this.startTimer(this.startduration);
  }

}

}







