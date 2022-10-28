import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //global variable
  formUserData: User = new User();

  //List all users --retrieve all records
  users: User[];  //all users
  roles: Role[];
  constructor(public httpClient: HttpClient) {
    //call rest api
    //1. Get all users

  }
  getAllUsers(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/users');
  }

  //  2 Retrieve all Users for Listing

  bingGetAllUsersList() {
    this.httpClient.get(environment.apiUrl + '/api/users')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.users = response as User[];
        }
      );
  }

  bindGetAllRoles() {
    this.httpClient.get(environment.apiUrl + '/api/roles').toPromise().then(
      (response) => {
        console.log(response);
        this.roles = response as Role[];
      }
    )
  }

  insertUser(user: User): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/users', user);
  }

  updateUser(user: User): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/users', user);
  }

  deleteUser(user: User): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/users/'+ user.userId, user);
  }
}
