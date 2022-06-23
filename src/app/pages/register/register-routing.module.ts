import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAdPageRoutingModule {}
