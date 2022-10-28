import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  loginForm: FormGroup;
  error = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //create a reactive form -- model
    //FormGroup 
    this.loginForm = this.formBuilder.group(
      {
        //FormControlName
        userName: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required]],

      }
    )
  }

  loginCredentials(){
    this.isSubmitted = true;
    console.log(this.loginForm.value);

    //invalid form 
    if(this.loginForm.invalid)
      return;

    //valid form 
    if(this.loginForm.valid){
      //calling method to check credentials
      
    }
  }

  get formControls(){
    return this.loginForm.controls;
  }
}
