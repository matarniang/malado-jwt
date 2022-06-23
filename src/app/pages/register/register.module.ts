import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdPageRoutingModule } from './register-routing.module';

import { LoginAdPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdPageRoutingModule
  ],
  declarations: [LoginAdPage]
})
export class LoginAdPageModule {}
