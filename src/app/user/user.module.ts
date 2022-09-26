import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { EaUserListComponent } from '../shared/modules/ea-user/ea-user-list/ea-user-list.component';
import { EaUserModule } from '../shared/modules/ea-user/ea-user.module';


@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    EaUserModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
