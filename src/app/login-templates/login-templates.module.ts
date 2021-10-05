import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplate1Component } from './login-template1/login-template1.component';
import { LoginTemplate2Component } from './login-template2/login-template2.component';
import { LoginTemplate3Component } from './login-template3/login-template3.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputTextModule} from 'primeng/inputtext';





@NgModule({
  declarations: [
    LoginTemplate1Component,
    LoginTemplate2Component,
    LoginTemplate3Component
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatFormFieldModule,
    InputTextModule
  ],
  bootstrap: [LoginTemplate1Component]
})
export class LoginTemplatesModule { }
