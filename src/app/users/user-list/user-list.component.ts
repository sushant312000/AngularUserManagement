import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  page: number = 1;
  filter: string = "";
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    console.log("Welcome lifecycle hooks");

    this.usersService.bingGetAllUsersList();
  }

  getAllUsersList() {
    this.usersService.getAllUsers().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },

      (error) => {
        console.log("Something wrong");
        console.log(error);
      }
    )
  }

  updateUser(userId: number) {
    console.log(userId);
  }

  populateForm(user: User) {
    this.usersService.formUserData = Object.assign({}, user)
  }

  deleteUserRecord(user: User) {
    if (confirm("Are you sure to delete this ?? ")) {
      this.usersService.deleteUser(user).subscribe(
        (response) => {
          console.log(response);
          window.location.reload();
        }
      );
    }
    else {
      return
    }
  }
}

