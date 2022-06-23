import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishforgotpasswordPageRoutingModule } from './finishforgotpassword-routing.module';

import { FinishforgotpasswordPage } from './finishforgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishforgotpasswordPageRoutingModule
  ],
  declarations: [FinishforgotpasswordPage]
})
export class FinishforgotpasswordPageModule {}
