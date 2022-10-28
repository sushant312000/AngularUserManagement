import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeComponent } from './employees/employee/employee.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeesComponent,
    // EmployeeComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
