import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent    
  ],
  imports: [
    FormsModule,
    CommonModule
  ],exports: [
    LoginComponent,
    FormsModule
  ]
})
export class VerifyModule { }
