import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VerifyRoutingModule } from './verify-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterReactiveComponent    
  ],
  imports: [
    FormsModule,
    CommonModule,
    VerifyRoutingModule,
    ReactiveFormsModule
  ],exports: [
    LoginComponent,
    FormsModule
  ]
})
export class VerifyModule { }
