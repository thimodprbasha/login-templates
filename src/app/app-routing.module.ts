import { LoginTemplate3Component } from './login-templates/login-template3/login-template3.component';
import { LoginTemplate2Component } from './login-templates/login-template2/login-template2.component';
import { LoginTemplate1Component } from './login-templates/login-template1/login-template1.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "login-1" , component: LoginTemplate1Component},
  {path : "login-2" , component: LoginTemplate2Component},
  {path : "login-3" , component: LoginTemplate3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
