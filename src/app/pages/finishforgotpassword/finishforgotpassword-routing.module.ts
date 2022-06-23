import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishforgotpasswordPage } from './finishforgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: FinishforgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishforgotpasswordPageRoutingModule {}
