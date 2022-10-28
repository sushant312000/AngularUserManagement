import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'admin', component: AdminComponent}, 
  {path: 'manager', component: ManagerComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'userlist', component: UserListComponent}, 
  {path: 'user', component: UserComponent}, 
  {path: 'users', component: UsersComponent}, 
  {path: '**', component: PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
