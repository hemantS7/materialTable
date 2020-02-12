import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import{UsernameValidators} from '../common/username.validators'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  ngOnInit(){
    console.log(this.signupForm.valid);
  }

  signupForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
    ],UsernameValidators.shouldBeUnique),
    password: new FormControl('',Validators.required),
  });

  login(){
   return  this.signupForm.setErrors({invalidCredentials:true});
  }

  get username(){
    return this.signupForm.get('username');
  }

  get password(){
    return this.signupForm.get('password');
  }
}
