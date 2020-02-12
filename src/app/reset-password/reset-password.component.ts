import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{PasswordValidators} from '../common/password.validators'

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent{

passwordResetForm = new FormGroup({
  oldPassword: new FormControl('',[Validators.required],PasswordValidators.shouldBeValid),
  newPassword: new FormControl('',[Validators.required]),
  confirmPassword: new FormControl('',[Validators.required])
},PasswordValidators.passwordShouldMatch);

get oldPassword(){
  return this.passwordResetForm.get('oldPassword');
}

get newPassword(){
  return this.passwordResetForm.get('newPassword');
}

get confirmPassword(){
  return this.passwordResetForm.get('confirmPassword');
}


}
