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
    path:"user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {title: 'User'}
  },
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
