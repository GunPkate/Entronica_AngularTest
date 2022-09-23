import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
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
  ],
  exports: [AppComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
