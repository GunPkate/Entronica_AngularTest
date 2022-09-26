import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VerifyRoutingModule } from './verify-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent    
  ],
  imports: [
    FormsModule,
    CommonModule,
    VerifyRoutingModule
  ],exports: [
    LoginComponent,
    FormsModule
  ]
})
export class VerifyModule { }
