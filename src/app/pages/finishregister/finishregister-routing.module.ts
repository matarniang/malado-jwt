import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAd1Page } from './finishregister.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAd1PageRoutingModule {}
