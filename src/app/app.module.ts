import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyModule } from './verify/verify.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VerifyModule,
    UserModule,
    HttpClientModule
  ],
  exports: [AppComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
