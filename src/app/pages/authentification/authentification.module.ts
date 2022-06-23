import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './authentification-routing.module';

import { RegisterPage } from './authentification.page';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
	Ng2OdometerModule.forRoot()
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
