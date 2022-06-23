import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAd1PageRoutingModule } from './finishregister-routing.module';

import { LoginAd1Page } from './finishregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAd1PageRoutingModule
  ],
  declarations: [LoginAd1Page]
})
export class LoginAd1PageModule {}
