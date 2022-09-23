import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './verify/login/login.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path:"userlist",
    component: UserListComponent,
    data: {title: 'User List'}
  },
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
