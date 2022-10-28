import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.bindGetAllRoles();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    //insert = 0 or update >= 1
    let insertId = this.usersService.formUserData.userId;

    //checking for insert or update
    if(insertId == 0 || insertId == null){
      this.insertUserRecord(form);
    }
    else{
      this.updateUserRecord(form);
    }
  }

  //Insert method
  insertUserRecord(form?:NgForm){
    console.log("Inserting a record");
    console.log(form.value);
    this.usersService.insertUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        window.location.reload();
      }
    );
  }

  updateUserRecord(form?: NgForm){
    console.log(form.value);
    this.usersService.updateUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        window.location.reload();
      }
    )
  }

  // deleteUSerRecord(form?: NgForm){
  //   console.log(form.value);
  //   this.usersService.updateUser(form.value).subscribe(
  //     (result)=>{
  //       console.log(result);
  //       window.location.reload();
  //     }
  //   )
  // }
}
