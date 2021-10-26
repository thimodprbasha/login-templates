import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplate1Component } from './login-template1/login-template1.component';
import { LoginTemplate2Component } from './login-template2/login-template2.component';
import { LoginTemplate3Component } from './login-template3/login-template3.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    LoginTemplate1Component,
    LoginTemplate2Component,
    LoginTemplate3Component,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatFormFieldModule,
    InputTextModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  bootstrap: [LoginTemplate1Component],
})
export class LoginTemplatesModule {}
